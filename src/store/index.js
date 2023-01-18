import { createStore } from 'vuex'

export default createStore({
	state: {
		phoneNumber: "",
		contacts:[
			{'name' : 'Tom', 'number' : '0625347569'},
			{'name' : 'Bob', 'number' : '0769423842'},
			{'name' : 'Alice', 'number' : '5555112'},
			{'name' : 'JusteX', 'number' : '113'},
		]
	},
	getters: {
	},
	mutations: {
		addNum(state, num) {
			state.phoneNumber+=num
		},
		resetNum(state){
			state.phoneNumber=''
		}
	},
	actions: {
	},
	modules: {
	}
})
