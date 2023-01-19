<template>
	<router-view />
	<footer>
		<nav>
			<router-link to="/">
				<div class="cat">
					<img src="@/assets/call.png" alt="Journal">
					<p>Journal</p>
				</div>
			</router-link>
			<router-link to="/contact">
				<div class="cat">
					<img src="@/assets/Contacts.png" alt="Contacts">
					<p>Contacts</p>
				</div>
			</router-link>
			<router-link to="/clavier">
				<div class="cat">
					<img src="@/assets/pad.png" alt="Clavier">
					<p>Clavier</p>
				</div>
			</router-link>
		</nav>
	</footer>
</template>

<style>

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 50px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #ff00e1;
}

nav a{
	text-decoration: none;
}

body {
	background-color: #13141e;
}


footer{
	position: fixed;
	background-color: #f4f5ff;
	width: 100%;
	bottom: 0;
	height: 10vh;
}

.cat{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.cat img{
	width: 25px;
	height: auto;
}

.cat p{
	font-size: 10px;
	text-decoration: none;
}


</style>
