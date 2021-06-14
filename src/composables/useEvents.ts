import { ref } from "vue";
import { getEvents as getEventsApi, getEventById as getEventByIdApi } from "../services/EventService"
import { Event } from "../type"

const events = ref<Event[]>([]);

export function useEvents() {
    const getEvents = async (): Promise<void> => {
      events.value = await getEventsApi();
    }

    const getEventById = async (id: number): Promise<Event> => {
        let event = events.value.find(e => e.id === id);

        return event ? event : await getEventByIdApi(id)
    }

    return {
        events,
        getEvents,
        getEventById
    };
}