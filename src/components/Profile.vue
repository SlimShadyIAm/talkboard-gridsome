<template>
	<div class="profile-outer">
		<figure class="image is-128x128">
			<img
				class="is-rounded"
				:src="'https://github.com/' + github + '.png'"
			/>
		</figure>
		<p class="caption">
			{{ name }}
			<a target="_blank" :href="'https://twitter.com/' + twitter">
				<i class="fab fa-twitter"></i>
			</a>
		</p>
	</div>
</template>

<script>
export default {
	name: "Profile",
	props: ["name", "twitter", "github"]
};
</script>

<style scoped>
.profile-outer {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.caption {
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 600;
}
a {
	color: #3273dc;
	cursor: pointer;
	text-decoration: none;
}
</style>
