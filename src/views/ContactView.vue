<template>
	<div class="space"></div>
	<router-link to="/add-contact" class="add">+<span>Nouveau contact</span></router-link>
	<div class="contacts-list">
		<div class="contacts" v-for="contact in this.$store.state.contacts.sort((a, b) => a.name.localeCompare(b.name))"
			:key="contact">
			<div class="contacts-details">
				<p>{{ contact.name }} </p>
				<p>{{ contact.number }}</p>
				<CallButton :name="contact.name" />
			</div>
			<hr>
		</div>
	</div>
</template>

<script>

import CallButton from '@/components/CallButton.vue'
export default {
	name: 'ContactView',
	components: {
		CallButton
	}
}
</script>

<style scoped>
.add {
	text-decoration: none;
	color: white;
	font-size: 30px;
	transition: 0.2s;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-top: 20px;
	z-index: 5;
	position: relative;
}

.add span {
	font-size: 20px;
}

.add:hover {
	text-shadow:
		0 0 5px #fff,
		0 0 10px #55ff00,
		0 0 15px #55ff00,
		0 0 20px #55ff00,
		0 0 30px #55ff00,
		0 0 50px #55ff00,
		0 0 80px #55ff00,
		0 0 120px #55ff00;
}

.contacts-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	overflow-y: scroll;
	height: 74%;
	z-index: 5;
	position: relative;
}

.contacts,
.contacts-details {
	height: 10vh;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
}

.contacts button {
	height: 40%;
	width: auto;
	margin: 0;
}

@media only screen and (max-height: 800px) {
	.contacts button {
		height: 55%;
	}
}

.contacts-details {
	flex-direction: row;
}

hr {
	width: 100%;
}

.contacts-details p {
	color: white;
}

.contacts-details p:nth-child(1) {
	color: white;
	text-shadow:
		0 0 5px #fff,
		0 0 10px #ff00e1,
		0 0 15px #ff00e1,
		0 0 20px #ff00e1;
}
</style>