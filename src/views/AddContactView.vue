<template>
    <form @submit.prevent="this.$store.commit('addContact', this.formContact)">
        <input v-model="formContact.name" type="text" placeholder="Name">
        <input v-model="formContact.number" type="text" placeholder="Number">
        <input type="submit" value="Ajouter">
        <div class="result">
            <div v-if="getErrors.length" > 
                <p v-for="error in getErrors" :key="error" class="nop">
                    {{ error }}
                </p>
            </div>
            <div v-if="getSuccess.length" > 
                <p v-for="succes in getSuccess" :key="succes" class="ok">
                    {{ succes }}
                </p>
            </div>
        </div>
    </form>
</template>



<script>
export default {
	name: 'AddContactView',
    computed: {
        getErrors(){
            return this.$store.state.errors
        },
        getSuccess(){
            return this.$store.state.success
        }
    },
	data() {
		return {
			formContact:{
                name: '',
                number: ''
            }
		}
	},
	
}
</script>

<style scoped>
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        gap: 50px;
        z-index: 5;
        position: relative;
    }
    input[type=text], input[type=submit]{
        height: 6vh;
        width: 60%;
        border-radius: 10px;
        text-align: center;
        border: solid 1px #369ae7;
        background-color: transparent;
        outline: none;
        color: white;
        transition: 0.2s;
    }

    input[type=text]::placeholder{
        color: white;
    }

    input[type=text]:focus{
        border: solid 1px #ff00e1;
        box-shadow:
		0 0 5px #fff,
		0 0 10px #ff00e1,
		0 0 15px #ff00e1,
		0 0 20px #ff00e1;
    }

    input[type=submit]{
        width: 40%;
        background-color: #369ae7;
        border: none;
        border-radius: 50px;
        transition: 0.150s;
        border: none;
    }
    input[type=submit]:hover{
        background-color: transparent;
        border: solid 1px #ff00e1;
        box-shadow:
		0 0 5px #fff,
		0 0 10px #ff00e1,
		0 0 15px #ff00e1,
		0 0 20px #ff00e1;
        text-shadow:
		0 0 5px #fff,
		0 0 10px #ff00e1,
		0 0 15px #ff00e1,
		0 0 20px #ff00e1;
    }
    .result{
        height: 10vh;
    }
    .ok{
        color: #23DC3D;
    }
    .nop{
        color: red;
    }
</style>