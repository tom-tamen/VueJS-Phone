<template>
	<h1>Contact</h1>
	<router-link to="/add-contact" class="add">+</router-link>
	<div v-for="contact in this.$store.state.contacts" :key="contact">
		{{ contact.name }} | {{ contact.number }}
		<CallButton :name="contact.name"/>
	</div>
</template>

<script>

import CallButton from '@/components/CallButton.vue'
export default {
	name: 'ContactView',
	components:{
		CallButton
	}
}
</script>

<style scoped>
	.add{
		text-decoration: none;
	}
</style>