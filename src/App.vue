<template>
	<div class="main-container">
		<div class="phone-parent">
			<img src="@/assets/phone.png" alt="phone" class="phone-img">
			<img src="@/assets/phone-cam.png" alt="phone-cam" class="phone-cam">
			<div class="phone">
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
			</div>
		</div>
	</div>
</template>

<style>

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-ms-overflow-style: none;
	scrollbar-width: none;
}

*::-webkit-scrollbar{
	display: none;
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
	z-index: 5;
	position: absolute;
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

.phone{
	position: absolute;
	background-color: #13141e;
	width: 95%;
	height: 98%;
	border-radius: 50px;
	bottom: 1vh;
	/* padding-top: 50px; */
}


.phone-img{
	z-index: 1;
	height: 100%;
}

.phone-cam{
	position: absolute;
	top: 0;
	z-index: 7;
}

.phone-parent{
	display: flex;
	align-items: center;
	justify-content: center;
	height: fit-content;
	position: relative;
}

.main-container{
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

footer{
	position: absolute;
	background-color: #f4f5ff;
	width: 100%;
	bottom: 0;
	height: 10vh;
	border-radius: 0 0 50px 50px;
}


body{
	background-color: rgb(64, 64, 64);
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

.space{
	min-height: 20px;
}

</style>
