//import { stat } from 'fs'
import { createStore } from 'vuex'

export default createStore({
	state: {
		phoneNumber: "",
		contacts:[
			{'name' : 'Tom', 'number' : '0625347569'},
			{'name' : 'Bob', 'number' : '0769423842'},
			{'name' : 'Alice', 'number' : '5555112'},
			{'name' : 'JusteX', 'number' : '113'},
		],
		recentCall:[],
		contactName: String
	},
	getters: {
	},
	mutations: {
		addNum(state, num) {
			state.phoneNumber+=num
		},
		resetNum(state){
			state.phoneNumber=''
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
			state.contacts.push({'name' : form.name, 'number' : form.number})
		}
	},
	actions: {
	},
	modules: {
	}
})
