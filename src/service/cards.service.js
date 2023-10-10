import { $axios } from '../api'
import { API_URL } from '../app.constance'

class CardsService {
	async getData() {
		const { data } = await $axios.get(API_URL + 'catalog.json')
		return data
	}
}

export default new CardsService()
