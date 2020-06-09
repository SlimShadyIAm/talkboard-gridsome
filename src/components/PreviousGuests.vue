<template>
	<div class="columns is-multiline">
		<div
			class="column is-12-mobile is-4-desktop"
			v-for="profile in profiles"
			:key="profile.id"
		>
			<Profile
				:src="profile.src"
				:name="profile.name"
				:twitter="profile.twitter"
			></Profile>
		</div>
	</div>
</template>

<script>
import Profile from "~/components/Profile";

export default {
	components: {
		Profile
	},
	data() {
		return {
			profiles: [
				{
					id: 1,
					name: "S1guza",
					twitter: "s1guza",
					github: "siguza"
				},
				{
					id: 2,
					name: "Coolstar",
					twitter: "CStar_OW",
					github: "coolstar"
				},
				{
					id: 3,
					name: "Kirb",
					twitter: "hbkirb",
					github: "kirb"
				},
				{
					id: 4,
					name: "iBSparkes",
					twitter: "iBSparkes",
					github: "psychotea"
				},
				{
					id: 5,
					name: "Moses Buckwalter",
					twitter: "MosesBuckwalter",
					github: "mosesbuckwalter"
				},
				{
					id: 6,
					name: "Micah Gomez",
					twitter: "micahpgomez",
					github: "mpg13"
				}
			]
		};
	}
};
</script>

<style></style>
