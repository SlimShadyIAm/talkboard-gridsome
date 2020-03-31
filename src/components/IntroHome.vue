<template>
	<div>
		<section class="hero purple-gradient is-large">
			<div class="hero-body">
				<div class="flex-container">
					<div class="img-container">
						<img src="@/assets/logo.png" />
					</div>
					<div class="text-container">
						<p class="title">
							Tech like you’ve never heard it before
						</p>
						<p class="subtitle" lang="en">
							Candid, in-depth discussions with some of the tech
							scene's most talented developers
						</p>
						<SocialButtons></SocialButtons>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import SocialButtons from "~/components/SocialButtons";
export default {
	name: "IntroHome",
	components: {
		Navbar,
		SocialButtons
	}
};
</script>

<style>
.purple-gradient {
	background: #8432b4;
	background: linear-gradient(140deg, #8c51cb 10%, #652ba2 100%);
	/* box-shadow: inset 0em 0em 5em 0em rgb(49, 49, 49); */
}
.flex-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
}
.hero-body {
	padding-top: 30px !important;
	padding-bottom: 50px !important;
}

.img-container {
	flex-grow: 1;
	margin-top: 20px;
	display: flex;
	justify-content: center;
}

.img-container img {
	border-radius: 20px;
	box-shadow: 0.5em 0.5em 2em 0.2em rgb(19, 18, 18);
	width: 300px;
	height: 300px;
}

@media (max-width: 1250px) {
	.img-container img {
		width: 200px;
		height: 200px;
	}
}

@media (max-width: 768px) {
	.hero-body {
		padding-top: 0px !important;
		padding-bottom: 50px !important;
	}
	.flex-container {
		flex-direction: column;
	}
	.img-container img {
		width: 200px;
		height: 200px;
	}

	.text-container {
		margin-top: 40px;
	}
}

.text-container {
	flex-grow: 0.5;
	/* flex-basis: 200px; */
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.text-container p {
	color: #fff;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
