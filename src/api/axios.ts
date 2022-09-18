import axios from 'axios'
import { NEXT_URL } from '@/constants/environment'

export const api = axios.create({
  baseURL: NEXT_URL,
})
