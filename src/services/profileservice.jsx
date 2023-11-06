import http from "./axiosContext"

const getOne=(id)=>{
    return http.get(`/user/${id}`)
}

const update=(id, Data)=>{
    return http.put(`/user/${id}`, Data)
}

export default{getOne}