<template>
	<h1>Clavier</h1>
	<div class="clavier">
		<p class="screen">{{ printNumber }}</p>
		<p v-if="contactsNumber.find(Number => Number === printNumber)">{{ getName }}</p>
		<p v-else>{{ setName }}</p>
		<ToucheClavier :num="i-1" v-for="i in 10" :key="i" />
		<CallButton :name="this.$store.state.contactName"/>
		<button @click="resetNumber">Reset</button>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ToucheClavier from '@/components/ToucheClavier.vue'
import CallButton from '@/components/CallButton.vue'
export default {
	name: 'ClavierView',
	components :{
		ToucheClavier,
		CallButton
	},
	computed :{
		printNumber(){
			return this.$store.state.phoneNumber
		},		
		getName(){
			this.$store.commit('updateContactName', this.$store.state.contacts.find(x=>x.number === this.printNumber).name)
			return this.$store.state.contactName
		},
		setName(){
			this.$store.commit('updateContactName', this.printNumber)
			return 'Inconnu'
		},
		call(){
			const date = new Date();
			return "Le "+date.toLocaleDateString("fr")+" à "+date.getHours()+"h"+date.getMinutes()
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
	.clavier{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.screen{
		border: solid 1px red;
		height: 30px;
		width: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
</style>

