<template>
    <div>
        <h1 class="title">Form</h1>
        <div class="field">
            <input
                v-validate="'required|min:3'"
                v-model="user.username"
                name="username"
                type="text"
                :class="className('username')"
                style="width:30em;"
            />
            <p class="help is-danger">{{ errorMessage('username') }}</p>
        </div>
        <div class="field">
            <input
                v-validate="'required|min:3'"
                v-model="user.password"
                name="password"
                type="password"
                :class="className('password')"
                style="width:30em;"
            />
            <p class="help is-danger">{{ errorMessage('password') }}</p>
        </div>
        <pre>{{ errors }}</pre>
    </div>
</template>

<script>
import 'animate.css/animate.min.css'
import '../vee-validate'

export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        errorMessage(fieldName) {
              return this.errors.first(fieldName)
        },

        className(fieldName) {
         const isError = this.errors.has(fieldName)

            return ['input', { 'is-danger': isError }, { animated: isError }, { heartBeat: isError }]
        }
    }
}
</script>