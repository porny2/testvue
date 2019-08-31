<template>
     <div>
        <router-link to="/">home</router-link>
        {{ ' | ' }}
        <router-link to="/about">about</router-link>
        {{ ' | ' }}
        <router-link to="/form">form</router-link>
        {{ ' | ' }}
            <router-link to="/chart">chart</router-link>
        {{ ' | ' }}
        <router-link to="/contract">contract</router-link>
         {{ ' | ' }}
        <router-link to="/user">User</router-link>
        {{ ' | ' }}
        <router-link to="/i18n">I18n</router-link>
    </div>
</template>

<script>
export default {}
</script>
