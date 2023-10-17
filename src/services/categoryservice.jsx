import http from "./axiosContext"

const create=(data)=>{
    return http.post("/categories",data)
}

const GetAll=()=>{
    return http.get("/categories")
}

const getOne=(id)=>{
    return http.get(`/categories/${id}`)
}

const update=(id, Data)=>{
    return http.put(`/categories/${id}`, Data)
}

const remove=(id)=>{
    return http.delete(`/categories/${id}`)
}

export default{create, GetAll, getOne, update, remove}