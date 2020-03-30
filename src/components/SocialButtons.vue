<template>
	<div class="social-outer">
		<a href="https://twitter.com/TalkBoardLive" class="button twitter"
			><span class="icon is-small"><i class="fab fa-twitter"></i></span
			><span>Twitter</span></a
		>
		<a href="https://discord.gg/jPtvbWV" class="button discord"
			><span class="icon is-small"><i class="fab fa-discord"></i></span
			><span>Discord</span></a
		>
		<a href="mailto:support@23aaron.com" class="button email"
			><span class="icon is-small"><i class="fas fa-envelope"></i></span
			><span>Email</span></a
		>
		<a
			href="https://cottonbureau.com/products/talkboard-logo"
			class="button merch"
			><span class="icon is-small"><i class="fas fa-tshirt"></i></span
			><span>Buy our merch!</span></a
		>
	</div>
</template>

<script>
export default {
	name: "SocialButtons"
};
</script>

<style scoped>
.social-outer {
	display: block;
	width: 100%;
}

.button {
	margin: 5px;
	border: none;
	color: #fff;
	width: 175px;
}

@media (max-width: 768px) {
	.button {
		width: 100%;
	}
}

.twitter {
	background-color: rgb(0, 162, 255);
}

.discord {
	background-color: #7289da;
}

.email {
	background-color: #ff4136;
}

.merch {
	background-color: #f012be;
}
</style>
