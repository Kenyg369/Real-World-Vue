<template>
  <div v-if = "event">
    <h1>{{ event.title}}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>     
  </div>
</template>>

<script lang='ts'>
import { defineComponent, ref} from 'vue'
import EventService from "../services/EventService.js"

export default defineComponent({
  props: {
    id:{
      type: Number,
      required: true,
    } 
  },

  setup(props,_){
    const event = ref(null)    
  
    EventService.getEvent(props.id)
    .then(response => {
      event.value = response.data    
    })
    .catch(error => {
      console.log(error)    
    })

/*   created() {
    EventService.getEvent(this.id)
    .then(response => {
      this.event = response.data    
    })
    .catch(error => {
      console.log(error)    
    })
  } */
    return {event}
  }
})  
</script>
