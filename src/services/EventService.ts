import axios from "axios"
import { Event } from "../type"
//Create a Axios Instance
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Kenyg369/real-world-vue' ,
  withCredentials: false,
  headers:{
    Accept:'application/json',
    'Content-Type': 'application/json'
  }
})
//Send API call and wrap it in the promise funcitons in composable "useEvents""
//Keep API call function in this filem. Deeper code seperation is good for larger size project
export async function getEvents(): Promise<Event[]> {
  const response = await apiClient.get<Event[]>('/events')

  return response.data;
}

export async function getEventById(id:Number): Promise<Event> {
  const response = await apiClient.get<Event>(`/events/${id}`)

  return response.data;
}
