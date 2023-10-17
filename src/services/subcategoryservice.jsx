import http from "./axiosContext"

const create=(data)=>{
    return http.post("/subcategories",data)
}

const GetAll=()=>{
    return http.get("/subcategories")
}

const getOne=(id)=>{
    return http.get(`/subcategories/${id}`)
}

const update=(id, Data)=>{
    return http.put(`/subcategories/${id}`, Data)
}

const remove=(id)=>{
    return http.delete(`/subcategories/${id}`)
}

export default{create, GetAll, getOne, update, remove}