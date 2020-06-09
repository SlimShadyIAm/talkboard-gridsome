<template>
	<section class="hero where-to-listen">
		<div class="hero-body reset">
			<div class="container">
				<div class="columns">
					<div class="column is-3">
						<!-- <p class="listen-on">Listen on:</!-->
						<p class="title has-text-white has-text-centered">Where to listen</p>
						<div class="badges container">
							<a href="https://open.spotify.com/show/1sCjmMpUDqnJNU54KwRf2Z">
								<img class="badge" src="@/assets/spotify-badge.png" />
							</a>
							<br />
							<a href="https://podcasts.apple.com/gb/podcast/talkboard/id1469760640">
								<img class="badge" src="@/assets/apple-badge.png" />
							</a>
							<div class="rss">
								<a
									class="button copy-button is-info has-text-white"
									v-clipboard:copy="message"
								>Copy RSS Link</a>
							</div>
						</div>
					</div>
					<div class="column">
						<p class="title has-text-white has-text-centered-mobile">Latest episodes</p>
						<Episodes></Episodes>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Episodes from "~/components/Episodes";
import VueClipboard from "vue-clipboard2";
import Vue from "vue";
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

export default {
	name: "WhereToListen",
	components: {
		Episodes
	},
	data() {
		return {
			message: "https://podcast.talkboard.live/feed.xml"
		};
	}
};
</script>

<style>
.where-to-listen {
	background-color: #272829;
}

.reset {
	padding-top: 30px !important;
	padding-bottom: 50px !important;
}

.badges {
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 80%;
	width: 100%;
}

.badge {
	width: 225px;
	margin: 10px;
	display: block;
	margin: 0 auto;
}

.rss {
	margin-top: 30px;
	display: flex;
	justify-content: center;
}

.copy-button {
	width: 100%;
	max-width: 225px;
	border: none;
}

.listen-on {
	color: #fff;
	font-size: 2.5em;
	margin-right: 30px;
}
</style>
