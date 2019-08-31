<template>
    <div>
        <h1 class="title">I18n</h1>
        <button @click="$i18n.locale=nextLocale" class="button">{{ nextLocale }}</button>
        <div v-html="$t('xxx')"></div>
    </div>
</template>

<script>
export default {
    computed: {
        nextLocale() {
            const currentLocale = this.$i18n.locale

            if (currentLocale === 'th') {
                return 'en'
            } else {
                return 'th'
            }
        }
    }
}
</script>