<template>
	<button @click="giveNum">{{ num }}</button>
</template>

<script>
export default {
	name: 'ToucheClavier',
	props: {
		num: Number
	},
	methods:{
		giveNum(){
			this.$store.commit('addNum', this.num)
		}
	}
}
</script>



<style scoped>

</style>
