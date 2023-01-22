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
	button{
		width: 30%;
		aspect-ratio: 1/1;
		background-color: transparent;
		border-radius: 100%;
		margin-top: 5%;
		font-size: 20px;
		border: solid 2px #2b5814;
		color: #2b5814;
		transition: 0.2s;
		cursor: pointer;
		z-index: 5;
	}
	button:hover{
		color: #abe290;
		text-shadow:
			0 0 5px #fff,
			0 0 15px #71e736,
			0 0 25px #71e736,
			0 0 50px #71e736,
			0 0 70px #71e736;
		border: solid 2px #abe290;
		box-shadow:
			0 0 5px #fff,
			0 0 15px #71e736,
			0 0 25px #71e736;
	}
</style>
