import * as axios from "axios";

const instance = axios.create ({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'adeede62-4e8d-4732-a606-204a51270b82'
    }

});


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
       return  instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
       return  instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return instance.get(`profile/`+ userId)

},
}
export const authAPI = {
    addMe(){
       return  instance.get(`auth/me`)
    }
}

