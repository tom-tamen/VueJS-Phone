<template>
    <form @submit.prevent="this.$store.commit('addContact', this.formContact)">
        <input v-model="formContact.name" type="text" placeholder="Name">
        <input v-model="formContact.number" type="text" placeholder="Number">
        <input type="submit" value="Ajouter">
    </form>
</template>


<script>
export default {
	name: 'AddContactView',
	data() {
		return {
			formContact:{
                name: '',
                number: ''
            }
		}
	},
	
}
</script>