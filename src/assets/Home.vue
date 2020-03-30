<template>
	<div>
		<IntroHome></IntroHome>
		<WhereToListen></WhereToListen>
		<HomeDetails></HomeDetails>
		<Footer></Footer>
	</div>
</template>

<script>
import IntroHome from "@/components/IntroHome";
import WhereToListen from "@/components/WhereToListen";
import HomeDetails from "@/components/HomeDetails";
import Footer from "@/components/Footer";

export default {
	name: "Home",
	components: {
		IntroHome,
		WhereToListen,
		HomeDetails,
		Footer
	}
};
</script>

<style></style>
