import { Time } from "@angular/common"

export interface Reservation{
  id: number
  nom: string
  nbCouverts: number
  date: Date
  email: string
  allergies: string
}