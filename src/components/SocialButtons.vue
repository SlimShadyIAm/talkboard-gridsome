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
		<div
			class="dropdown is-hoverable"
			:class="dropdownActive ? 'is-active' : ''"
		>
			<div class="dropdown-trigger">
				<button
					href="https://cottonbureau.com/products/talkboard-logo"
					class="button merch"
					aria-haspopup="true"
					aria-controls="dropdown-menu2"
				>
					<span class="icon is-small"
						><i class="fas fa-tshirt"></i></span
					><span>Buy our merch!</span>
				</button>
			</div>
			<div class="dropdown-menu" id="dropdown-menu2" role="menu">
				<div class="dropdown-content">
					<a
						href="https://cottonbureau.com/products/talkboard-logo#/3049358/tee-men-standard-tee-black-100percent-cotton-s"
						class="dropdown-item"
					>
						Regular logo
					</a>
					<a
						href="https://cottonbureau.com/products/talkboard-mono#/3128727/tee-men-standard-tee-purple-rush-100percent-cotton-s"
						class="dropdown-item"
					>
						Monocolor logo
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SocialButtons",
	data() {
		return {
			dropdownActive: false
		};
	},
	methods: {
		toggleDropdown: function() {
			this.dropdownActive = !this.dropdownActive;
		}
	}
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
	.dropdown,
	.dropdown-trigger {
		width: 100%;
	}
	.dropdown-menu,
	.dropdown-content {
		width: 100%;
		margin-left: 3px;
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

.dropdown .dropdown-menu {
	display: none;
}
.dropdown-content {
	width: 90%;
	margin-left: 5px;
}
</style>
