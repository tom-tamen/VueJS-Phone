//import { stat } from 'fs'
import { createStore } from 'vuex'

export default createStore({
	state: {
		phoneNumber: "",
		contacts:[],
		recentCall:[],
		contactName: "",
		errors:[],
		success:[]
	},
	getters: {
	},
	mutations: {
		addNum(state, num) {
			state.phoneNumber+=num
		},
		resetNum(state){
			state.phoneNumber=""
			state.contactName=""
		},
		call(state, name){
			if(name=="") return
			const date = new Date();
			const formattedDate = "Le "+date.toLocaleDateString("fr")+" à "+date.getHours()+"h"+date.getMinutes()
			state.recentCall.push({'name': name, 'date' :formattedDate})
		},
		updateContactName(state, name){
			state.contactName = name 
		},
		addContact(state, form){
			state.errors = []
			state.success = []

			if(form.name == "" || form.number == ""){
				state.errors = ["Un champ est vide."]
				return
			}
			if(state.contacts.map(a => a.number).find(Number => Number === form.number)){
				state.errors = ["Ce numéro est déjà attribué."]
				return
			}
			state.success = ["Contact ajouté !"]
			state.contacts.push({'name' : form.name, 'number' : form.number})
		},
	},
	actions: {
	},
	modules: {
	}
})
