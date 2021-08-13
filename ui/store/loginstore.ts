import { defineStore } from 'pinia'
import { reactive} from 'vue'

export const useLoginStore = defineStore("loginStore", () => {

    const data = reactive({ email: "", password: "" })

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

        }).catch((Errors) => { throw Errors.body })
    }

    return { data, loginPatient }

})
