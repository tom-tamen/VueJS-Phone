<template>
	<div class="Journal">
		<div v-if="recentCall.length" class="call-list">
			<div class="call-details" v-for="call in recentCall" :key="call" >
				<div class="space"></div>
				<div class="space"></div>
				<div class="call-infos">
					<p>{{ call.name }}</p>
					<p>{{ call.date }}</p>
				</div>
				<hr>
			</div>
			<div class="space"></div>
		</div>
		<div class="nothing" v-if="!recentCall.length">
			<img src="@/assets/history.png" alt="Journal">
			<h1>Pas d'appel récent</h1>
		</div>
	</div>
</template>


<script>

export default {
	name: 'JournalView',
	data() {
		return {
			recentCall: this.$store.state.recentCall,
		}
	},
	
}
</script>

<style scoped>
	h1{
		color: white;
		font-size: 20px;
	}

	.nothing{
		width: 100%;
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.call-list{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		overflow-y: scroll;
		height: 100%;
		padding: 10px;
		gap: 20px;
	}
	.call-details{
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		height: 8vh;
	}

	.call-infos{
		display: flex;
		flex-direction: column;
		gap:15px;
		height: 10vh;
		z-index: 5;
	}
	.call-details p:nth-child(1){
		color: white;
		text-shadow:
		0 0 5px #fff,
		0 0 10px #ff00e1,
		0 0 15px #ff00e1,
		0 0 20px #ff00e1;
		font-size: 20px;
	}
	.call-details p:nth-child(2){
		color: rgb(229, 229, 229);
	}
	hr{
		width: 40%;
		height: 2px;
		background-color: #b4e4ee;
		border: none;
		box-shadow:
		0 0 5px #fff,
		0 0 15px #369ae7,
		0 0 25px #369ae7;
		
	}

	.Journal{
		height: 85%;
	}
</style>