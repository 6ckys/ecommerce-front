import http from "./axiosContext"

const signIn=(data)=>{
    return http.post("/auth/signin",data)
}

const signUp=(data)=>{
    return http.post("/auth/signup",data)
}

const logOut=()=>{
    return http.get(`/auth/logout`)
}

export default{signIn, signUp, logOut}