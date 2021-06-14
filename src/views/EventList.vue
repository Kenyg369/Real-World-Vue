<template>
  <div class ="event-card-conatiner">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { EventItem } from '../type';
import {ref, defineComponent} from 'vue';
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";

export default defineComponent({
  name: "EventList",
  components: {
    EventCard,
  },
  setup() {
    const events = ref<EventItem[]>([]) 
    //axios.get(
    //  'https://my-json-server.typicode.com/Kenyg369/real-world-vue/events'
    //  )
    EventService.getEvents()
    .then(response => {
      events.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
    return{events}
  }
});
</script>

<style scoped>
.event-card-conatiner{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
