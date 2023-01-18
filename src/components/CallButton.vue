<template>
	<button @click="call">Appeler</button>
</template>

<script>
export default {
	name: 'CallButton',
	props: {
		name: String
	},
	methods:{
		call(){
			this.$store.commit('call', this.name)
		}
	}
}
</script>



<style scoped>

</style>
