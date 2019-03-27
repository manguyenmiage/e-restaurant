
//Call api login
const login = (email, username) => ({email, username})

//Call api register
const register = (user) => ({user})

export {
    login,
    register
};