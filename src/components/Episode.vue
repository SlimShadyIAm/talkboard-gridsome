<template>
	<!-- <div class="episode-card column is-3">
		<p class="episode-title">{{ title }}</p>
		<p class="episode-desc">
			{{
				description
					.split(" ")
					.splice(0, 15)
					.join(" ") + "..."
			}}
		</p>
	</div>-->
	<div class="card card-black column is-4">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-5 has-text-white">{{ episode.title }}</p>
					<p class="subtitle is-6 has-text-white">
						Season {{ episode.itunes.season }}, Epsiode
						{{ episode.itunes.episode }}
					</p>
				</div>
				<div class="media-right">
					<a :href="episode.link" target="_blank" class="button play-button">
						<span class="icon has-text-white">
							<i class="fas fa-play"></i>
						</span>
					</a>
				</div>
			</div>

			<div class="content has-text-white">
				{{  episode.contentSnippet.length > 160 ? episode.contentSnippet
					.substring(0, 160)
					+ "..." : episode.contentSnippet }}
				<br />
				<time>{{ timestamp }}</time>
			</div>
		</div>
	</div>
</template>

<script>
var moment = require("moment");
export default {
	name: "Episode",
	props: ["episode"],
	data() {
		return {
			timestamp: moment(this.episode.pubDate).fromNow()
		};
	}
};
</script>

<style>
.card-black {
	background-color: rgb(31, 32, 33) !important;
	margin-right: 10px;
	width: auto;
}

@media (max-width: 768px) {
	.card {
		margin-right: 0px;
		margin-bottom: 10px;
	}
}

.episode-title {
	color: #fff;
	font-size: 22px;
	font-weight: 600;
}

.episode-desc {
	color: #fff;
}

.play-button {
	border-radius: 50% !important;
	background-color: rgb(0, 175, 245) !important;
	border: none !important;
}

.play-button i {
	margin-left: 2px;
}

.media {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

time {
	color: rgb(175, 175, 175);
}
</style>
