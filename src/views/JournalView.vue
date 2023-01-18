<template>
	<div class="Journal">
		<h1>Journal</h1>
		<p v-for="call in recentCall" :key="call" >{{ call.name }} | {{ call.date }}</p>
		<p>{{ getDate }}</p>
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