<template>
  <div v-if = "event">
    <h1>{{ event.title}}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>     
  </div>
</template>>

<script lang='ts'>
import { defineComponent, ref} from 'vue'
import { useEvents } from "../composables/useEvents";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  setup(props,_){
    const event = ref()
    const { getEventById } = useEvents()

    getEventById(props.id)
      .then(e => event.value = e)
      .catch(err => console.log(err))

    return { event }
  }
})
</script>
