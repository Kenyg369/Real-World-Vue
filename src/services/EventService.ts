import axios from "axios"
import { EventItem } from "../type"

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Kenyg369/real-world-vue' ,
  withCredentials: false,
  headers:{
    Accept:'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(): Promise<Event[]> {
    return apiClient.get('/events')
  },
  getEvent(id: number): Promise<Event[]> {
    return apiClient.get('/events/' + id)
  }
}
