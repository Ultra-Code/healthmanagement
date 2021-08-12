import { defineStore } from 'pinia'

interface Login {
    email: string,
    password: string
}

export const useLoginStore = defineStore("login_store", {
    state: () => ({ email: "", password: "" }),
    getters: {
        email: (state) => state.email,
        password: (state) => state.password
    },
    actions: {
        updateEmail(email: string) { this.$state.email = email },
        updatePassword(password: string) { this.$state.password = password },
        loginUser: async (state: Login) => { fetch("0.0.0.0/api/patients/login")}
    }
})
