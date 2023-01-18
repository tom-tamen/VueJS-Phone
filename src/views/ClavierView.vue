<template>
	<h1>Clavier</h1>
	<div class="clavier">
		<p>{{ printNumber }}</p>
		<p v-if="contactsNumber.find(Number => Number === printNumber)">{{ getName }}</p>
		<p v-else>Inconnu</p>
		<ToucheClavier :num="i-1" v-for="i in 10" :key="i" />
		<button>Call</button>
		<button @click="resetNumber">Reset</button>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ToucheClavier from '@/components/ToucheClavier.vue'
export default {
	name: 'ClavierView',
	components :{
		ToucheClavier,
	},
	computed :{
		printNumber(){
			return this.$store.state.phoneNumber
		},
		getName(){
			return this.$store.state.contacts.find(x=>x.number === this.printNumber).name
		}
    },
	methods:{
		resetNumber(){
			this.$store.commit('resetNum')
		},
	},
	data() {
		return {
			contactsNumber: this.$store.state.contacts.map(a => a.number),
		}
	},
}

</script>

<style scoped>
	.clavier:nth-child(1){
		border: solid 1px red;
	}
</style>

