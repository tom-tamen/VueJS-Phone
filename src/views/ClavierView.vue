<template>
	<div class="clavier">
		<div class="pad">
			<p class="screen">{{ printNumber }}</p>
			<hr>
			<div class="contact-name">
				<p class='find' v-if="contactsNumber.find(Number => Number === printNumber)">{{ getName }}</p>
				<p class='unknown' v-else-if="printNumber" >{{ setName }}</p>
				<p v-else>-</p>
				
			</div>
			<ToucheClavier :class="`num-btn-${10 - i}`" :num="10 - i" v-for="i in 10" :key="i" />
			<CallButton :name="this.$store.state.contactName" />
			<button class="reset" @click="resetNumber">X</button>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ToucheClavier from '@/components/ToucheClavier.vue'
import CallButton from '@/components/CallButton.vue'
export default {
	name: 'ClavierView',
	components: {
		ToucheClavier,
		CallButton
	},
	computed: {
		printNumber() {
			return this.$store.state.phoneNumber
		},
		getName() {
			this.$store.commit('updateContactName', this.$store.state.contacts.find(x => x.number === this.printNumber).name)
			return this.$store.state.contactName
		},
		setName() {
			this.$store.commit('updateContactName', this.printNumber)
			return 'Inconnu'
		},
		call() {
			const date = new Date();
			return "Le " + date.toLocaleDateString("fr") + " à " + date.getHours() + "h" + date.getMinutes()
		}
	},
	methods: {
		resetNumber() {
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
.clavier {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 80%;
}

.screen {
	height: 30px;
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: white;
	text-shadow:
		0 0 5px #fff,
		0 0 10px #55ff00,
		0 0 15px #55ff00,
		0 0 20px #55ff00,
		0 0 30px #55ff00,
		0 0 50px #55ff00,
		0 0 80px #55ff00;
}

.pad {
	display: flex;
	width: 200px;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
	gap: 5%;
	flex-direction: row-reverse;
}

hr {
	width: 100%;
	height: 1px;
	background-color: #e5cbf0;
	border: none;
	box-shadow:
		0 0 5px #fff,
		0 0 15px #ff00e1,
		0 0 25px #ff00e1;
}

.num-btn-0 {
	order: 2;
}


.reset {
	order: 3;
	width: 30%;
	aspect-ratio: 1/1;
	background-color: transparent;
	border-radius: 100%;
	margin-top: 5%;
	font-size: 20px;
	border: solid 2px #581414;
	color: #581414;
	transition: 0.2s;
	cursor: pointer;
	z-index: 5;
}

.reset:hover {
	color: #e29090;
	text-shadow:
		0 0 5px #fff,
		0 0 15px #e73636,
		0 0 25px #e73636,
		0 0 50px #e73636,
		0 0 70px #e73636;
	border: solid 2px #e29090;
	box-shadow:
		0 0 5px #fff,
		0 0 15px #e73636,
		0 0 25px #e73636;
}

.contact-name{
	width: 100%;
	color: white;
	font-size: 20px;
}

.find{
	text-shadow:
		0 0 5px #fff,
		0 0 10px #ff00e1,
		0 0 15px #ff00e1,
		0 0 20px #ff00e1,
		0 0 30px #ff00e1,
		0 0 50px #ff00e1,
		0 0 80px #ff00e1;
}
.unknown{
	text-shadow:
		0 0 7px #fff,
		0 0 10px #ff0000,
		0 0 15px #ff0000,
		0 0 20px #ff0000,
		0 0 30px #ff0000,
		0 0 50px #ff0000,
		0 0 80px #ff0000;
}
</style>

