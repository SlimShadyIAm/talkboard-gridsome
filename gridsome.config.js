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
				feedUrl: "https://rss.whooshkaa.com/rss/podcast/id/7841.rss",
				typeName: "HNFrontpageItem"
			}
		}
	],
	siteUrl: "https://talkboard.live",
	icon: "./src/favicon.png"
};
