import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export const useSignUpStore = defineStore("signUpStore", () => {

    const data = reactive({ username: "", email: "", password: "" })
    const signupStatus = reactive({ accountAlreadyExist: false })

    const router = useRouter()

    const signUpPatient = () => {
        const formData = new FormData();
        formData.set("username", data.username)
        formData.set("email", data.email)
        formData.set("password", data.password)
        fetch("http://localhost:80/api/patients/signup", {
            method: "POST",
            mode: "cors",
            headers: {
            },
            body: formData
        }).then((ServerResponse) => {
            if (ServerResponse.status === 200) {
                router.push({ name: 'appointment', path: '/appointment' })
            }
            else if (ServerResponse.status === 401) {
                signupStatus.accountAlreadyExist = true
            }
        }).catch((Errors) => { throw Errors })
    }

    return { data, signUpPatient, signupStatus }

})

