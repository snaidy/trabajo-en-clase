export const saveUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const checkUser = () => {

    const user = JSON.parse(sessionStorage.getItem("user")) || {};
    return user;
}

export const clearSession = () => {
    sessionStorage.clear();
}