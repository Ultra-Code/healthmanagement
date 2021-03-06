import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export const useLoginStore = defineStore("loginStore", () => {

    const data = reactive({ email: "", password: "" })
    const loginStatus = reactive({ allowed: true })

    const router = useRouter()

    const loginPatient = () => {
        const formData = new FormData();
        formData.set("email", data.email)
        formData.set("password", data.password)
        fetch("http://localhost:80/api/patients/login", {
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
                loginStatus.allowed = false;
            }
        }).catch((Errors) => { throw Errors })
    }

    return { data, loginPatient, loginStatus }

})
