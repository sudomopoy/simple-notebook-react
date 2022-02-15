export const getToken = () => {
    return localStorage.getItem("access-token");
}
export const setToken = (token) => {
    localStorage.setItem("access-token", token);
}
