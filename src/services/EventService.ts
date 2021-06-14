import axios from "axios"
import { Event } from "../type"

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Kenyg369/real-world-vue' ,
  withCredentials: false,
  headers:{
    Accept:'application/json',
    'Content-Type': 'application/json'
  }
})

export async function getEvents(): Promise<Event[]> {
  const response = await apiClient.get<Event[]>('/events')

  return response.data;
}

export async function getEventById(id:Number): Promise<Event> {
  const response = await apiClient.get<Event>(`/events/${id}`)

  return response.data;
}
