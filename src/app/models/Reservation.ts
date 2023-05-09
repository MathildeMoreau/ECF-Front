import { Time } from "@angular/common"

export interface Reservation{
  id: number
  nom: string
  nb_couverts: number
  date: Date
  heure: Time
  client_id: number
}