<template>
    <div>
        {{ id }}
    </div>
</template>

<script>
export default {
    name: 'userId',
    validate({params, query}){
        console.log(params)
        console.log(query)
        if(params.id !== "15"){
            return false
        }
        return true
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
}
</script>
