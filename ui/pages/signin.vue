<template>
    <AuthSignInForm :loginFunction="loginPatient" />
</template>

<route>
    {
    meta:{
    layout : "plain"
    }
    }
</route>

<script lang="ts" setup>
    import {useLoginStore} from "../store/loginstore"

    const loginstore = useLoginStore()

    const loginPatient = () => {
        const formData = new FormData();
        /* data.set("email", loginstore.email)
        data.set("password", loginstore.password) */
        fetch("http://localhost:80/api/patients/login", {
            method:"POST",
            mode: "cors",
            body: formData
        }).then((ServerResponse) => {

        }).catch((Errors) => {throw Errors.body})
    }
</script>
