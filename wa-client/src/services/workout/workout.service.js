import { $axios } from "../../api"

export const WORKOUTS = '/workouts'

class WorkoutsService {
    async getAll() {
        return  $axios.get(WORKOUTS)
    }

    async getId(id) {
        return  $axios.get(`${WORKOUTS}/${id}`)
    }
    
    async create(body) {
        return  $axios.post(WORKOUTS, body)
    }

    async update(id, body) {
        return  $axios.put(`${WORKOUTS}/${id}`, body)
    }

    async delete(id) {
        return  $axios.delete(`${WORKOUTS}/${id}`)
    }
}


export default new WorkoutsService()