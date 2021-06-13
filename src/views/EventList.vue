<template>
  <div class ="event-card-conatiner">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import { useEvents } from "../composables/useEvents";
import EventCard from "../components/EventCard.vue";


export default {
  name: "EventList",
  components: {
    EventCard,
  },
  setup() {
    const { events, getEvents } = useEvents()

    getEvents().catch(e => console.log(e))

    return {
      events
    }
  }
};
</script>

<style scoped>
.event-card-conatiner{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
