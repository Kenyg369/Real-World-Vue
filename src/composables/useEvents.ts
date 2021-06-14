import { ref } from "vue";
//Since the functions here have same names as the async api call functions, we rename them when imported them in
import { getEvents as getEventsApi, getEventById as getEventByIdApi } from "../services/EventService"
import { Event } from "../type"

//Move "const events" outside ,so we can use quick search
const events = ref<Event[]>([]);

export function useEvents() {
    //API call function are async, so this assgin functions need to be asyncs as well
    const getEvents = async (): Promise<void> => {
      events.value = await getEventsApi();
    }
    const getEventById = async (id: number): Promise<Event> => {
        let event = events.value.find(e => e.id === id);
        //Quick search: Try obtain the event from events array
        //Otherwise do another Promise API with specific ID 
        return event ? event : await getEventByIdApi(id)
    }

    return {
        events,
        getEvents,
        getEventById
    };
}