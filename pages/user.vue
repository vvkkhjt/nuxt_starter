<template>
    <div>
        <nuxt-link to="/user/12">12</nuxt-link>
        <nuxt-link to="/user/15">15</nuxt-link>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
    name: 'user'
}
</script>
