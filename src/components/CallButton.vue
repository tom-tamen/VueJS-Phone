<template>
	<button @click="call"><svg class="phone" viewBox="0 0 44.07 43.84"><g><path d="M34.24,43.83c-1.71-.69-4.53-1.41-6.89-2.87C16.5,34.29,7.51,25.71,1.71,14.23c-1.56-3.09-2.92-6.34,.05-9.72C7.13-1.62,9.1-1.57,13.64,5.1c2.28,3.36,4.93,6.51,1.5,10.67-.4,.48-.47,1.86-.1,2.25,3.57,3.72,7.2,7.39,11.01,10.86,.47,.43,2.13-.22,3.13-.64,3.46-1.46,13.49,2.67,14.77,6.15,1.06,2.89-4.97,9.47-9.71,9.45Z"/><path d="M41.36,21.63c-2.19-10.62-8.32-16.84-19.46-18.19,3.08-1.98,7.14-1.24,11.66,1.98,5.56,3.96,8.33,9.32,7.8,16.21Z"/><path d="M22.13,8.61c8.29-1.15,14.63,5.23,13.28,13.38-1.51-7.38-5.66-12.06-13.28-13.38Z"/></g><path d="M21.69,12.56c6.03-.78,10.64,3.55,9.66,9.07-1.1-5.01-4.12-8.18-9.66-9.07Z"/></svg></button>
</template>
<!-- <img src="@/assets/call.svg" alt="Appeler"></img> -->
<script>
export default {
	name: 'CallButton',
	props: ["name"],
	methods: {
		call() {
			this.$store.commit('call', this.name)
		}
	}
}
</script>



<style scoped>
button {
	width: 30%;
	aspect-ratio: 1/1;
	background-color: transparent;
	border-radius: 100%;
	margin-top: 5%;
	border: solid 2px #144858;
	transition: 0.2s;
	cursor: pointer;
}
.phone{
	fill : #144858;
	height: 50%;
	width: auto;
	transition: 0.2s;
}
button:hover .phone{
	filter: drop-shadow(0 0 25px #369ae7);
	fill: #90d4e2;
}

button:hover {
	border: solid 2px #90d4e2;
	box-shadow:
		0 0 5px #fff,
		0 0 15px #369ae7,
		0 0 25px #369ae7;
}

</style>
