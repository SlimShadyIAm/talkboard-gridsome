<template>
	<div>
		<IntroHome></IntroHome>
		<WhereToListen></WhereToListen>
		<HomeDetails></HomeDetails>
		<Footer></Footer>
	</div>
</template>

<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>
<script>
import IntroHome from "~/components/IntroHome.vue";
import WhereToListen from "~/components/WhereToListen.vue";
import HomeDetails from "~/components/HomeDetails";
import Footer from "~/components/Footer";

export default {
	components: {
		IntroHome,
		WhereToListen,
		HomeDetails,
		Footer
	}
};
</script>

<style></style>
