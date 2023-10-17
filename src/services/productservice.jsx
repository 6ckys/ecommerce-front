import http from "./axiosContext"

const create=(data)=>{
    return http.post("/products",data)
}

const GetAll=()=>{
    return http.get("/products")
}

const getOne=(id)=>{
    return http.get(`/products/${id}`)
}

const update=(id, Data)=>{
    return http.put(`/products/${id}`, Data)
}

const remove=(id)=>{
    return http.delete(`/products/${id}`)
}

export default{create, GetAll, getOne, update, remove}