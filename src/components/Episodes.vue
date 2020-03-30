<template>
	<div class="container">
		<div class="episodes columns">
			<Episode
				v-for="episode in episodes"
				:key="episode.guid"
				:episode="episode"
			></Episode>
		</div></div
></template>

<script>
//let Parser = require("rss-parser"); -->
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

import Episode from "@/components/Episode";
export default {
	name: "Episodes",
	components: { Episode },
	data() {
		return {
			feedUrl: "https://rss.whooshkaa.com/rss/podcast/id/7841",
			episodes: []
		};
	},
	//async created() {
	//	let parser = new Parser();
//
//		let feed = await parser.parseURL(CORS_PROXY + this.feedUrl);
//		this.episodes = feed.items.slice(0, 3);
//	}
};
</script>

<style></style>
