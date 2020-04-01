// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.use(Buefy);
	head.link.push({
		rel: "stylesheet",
		href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
	});
	head.meta.push({
		property: "og:type",
		content: "website"
	});
	head.meta.push({
		property: "og:url",
		content: "https://talkboard.live/"
	});
	head.meta.push({
		property: "og:title",
		content: "TalkBoard"
	});
	head.meta.push({
		property: "og:description",
		content: "Tech like you've never heard it before."
	});
	head.meta.push({
		property: "og:image",
		content: "https://talkboard.live/banner.png"
	});
	head.meta.push({
		property: "twitter:card",
		content: "summary_large_image"
	});
	head.meta.push({
		property: "twitter:url",
		content: "https://talkboard.live"
	});
	head.meta.push({
		property: "twitter:tutle",
		content: "TalkBoard"
	});
	head.meta.push({
		property: "twitter:description",
		content: "Tech like you've never heard it before."
	});
	head.meta.push({
		property: "twitter:image",
		content: "https://talkboard.live/banner.png"
	});
}
