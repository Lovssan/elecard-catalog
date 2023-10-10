import axios from 'axios'

import { API_URL } from './app.constance'

export const $axios = axios.create({
	baseURL: API_URL
})
