<template>
	<div class="container">
		<div class="episodes columns">
			<Episode
				v-for="episode in $static.allHnFrontpageItem.edges"
				:key="episode.node.guid"
				:episode="episode.node"
			></Episode>
		</div></div
></template>

<static-query>
query {
	allHnFrontpageItem(sortBy: "pubdate" order: ASC limit: 3) {
    edges {
      node{
        id
        title
        link
        contentSnippet
        pubDate
        itunes {
          season
          episode
        }
      }
    }
  }
}
</static-query>

<script>
import Episode from "@/components/Episode";
export default {
	name: "Episodes",
	components: { Episode }
};
</script>

<style></style>
