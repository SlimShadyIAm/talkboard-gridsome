// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "TalkBoard",
	plugins: [
		{
			use: "gridsome-source-rss",
			options: {
				feedUrl: "https://podcast.talkboard.live/feed.xml",
				typeName: "HNFrontpageItem"
			}
		}
	],
	siteUrl: "https://talkboard.live",
	icon: "./src/favicon.png"
};
