<template>
	<div class="container start">
		<div class="columns">
			<div class="column">
				<p class="title is-spaced">About</p>
				<Profile name="23 Aaron" twitter="23aaron_"></Profile>
				<p class="subtitle is-5" style="padding: 0 20px;">
					A show hosted by 23 Aaron & sometimes a co-host!
				</p>
				<p class="subtitle is-5" style="padding: 0 20px;">
					From week to week, there will be special guests, interesting
					topics, and even community questions. If you'd like to take
					part in the podcast, contact @TalkBoardLive on Twitter.
				</p>
			</div>
			<br />
			<div class="column">
				<p class="title">Previous Guests</p>
				<PreviousGuests></PreviousGuests>
			</div>
		</div>
	</div>
</template>

<script>
import Profile from "~/components/Profile";
import PreviousGuests from "~/components/PreviousGuests";
export default {
	components: {
		Profile,
		PreviousGuests
	}
};
</script>

<style>
.start {
	margin-top: 30px !important;
	margin-bottom: 30px !important;
}

.start .title {
	text-align: center;
}

.columns {
	margin-left: 0rem;
	margin-right: 0rem;
}
</style>
