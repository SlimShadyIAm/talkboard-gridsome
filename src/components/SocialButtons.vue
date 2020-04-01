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
		<a></a>
		<div class="dropdown" :class="dropdownActive ? 'is-active' : ''">
			<div class="dropdown-trigger" @click="toggleDropdown">
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
					<div class="dropdown-item">
						<div class="columns">
							<div class="column is-6">
								<div class="card">
									<div class="card-image">
										<figure class="image is-4by3">
											<img
												src="https://bulma.io/images/placeholders/1280x960.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>
									<div class="card-content">
										<div class="media">
											<div class="media-left">
												<figure class="image is-48x48">
													<img
														src="https://bulma.io/images/placeholders/96x96.png"
														alt="Placeholder image"
													/>
												</figure>
											</div>
											<div class="media-content">
												<p class="title is-4">
													John Smith
												</p>
												<p class="subtitle is-6">
													@johnsmith
												</p>
											</div>
										</div>

										<div class="content">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
											Phasellus nec iaculis mauris.
											<a>@bulmaio</a>.
											<a href="#">#css</a>
											<a href="#">#responsive</a>
											<br />
											<time datetime="2016-1-1"
												>11:09 PM - 1 Jan 2016</time
											>
										</div>
									</div>
								</div>
							</div>
							<div class="column is-6"></div>
						</div>
					</div>
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

.dropdown-menu {
	width: 40rem;
	right: 0;
	left: auto;
}
</style>
