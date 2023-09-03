export const setToken = token => localStorage.setItem("jwt",token)
export const getToken = _ => localStorage.getItem("jwt")