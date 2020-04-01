<template>
	<div>
		<IntroHome></IntroHome>
		<WhereToListen></WhereToListen>
		<HomeDetails></HomeDetails>
		<Patrons></Patrons>
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
import Patrons from "~/components/Patrons";
import Footer from "~/components/Footer";

export default {
	components: {
		IntroHome,
		WhereToListen,
		HomeDetails,
		Patrons,
		Footer
	}
};
</script>

<style></style>
