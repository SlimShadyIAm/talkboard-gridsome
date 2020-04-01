<template>
	<div class="patrons-background">
		<h3 class="title has-text-centered has-text-white">
			A big thank you to our top tier Patrons, their contributions help
			the show operate!
		</h3>
		<div class="patrons-names container has-text-centered">
			<span
				class="patron-name is-italic"
				v-for="(patron, index) in $static.allPatrons.edges"
				:key="patron.id"
				>{{ patron.node.name ? patron.node.name : patron.node.fullName
				}}<span class="bullet">{{
					index != Object.keys($static.allPatrons.edges).length - 1
						? "&bull;"
						: ""
				}}</span></span
			>
		</div>
		<!-- <h3 class="subtitle has-text-centered has-text-white">
			Would you like to contribute to the show as well? Check out our
			Patreon!
		</h3> -->
		<a
			href="https://www.patreon.com/bePatron?u=24427643"
			class="button patreon-button"
			><span class="icon is-small"><i class="fab fa-patreon"></i></span
			><span>Support us on Patreon!</span></a
		>
	</div>
</template>

<static-query>
query {
  	allPatrons{
		edges {
			node{
				id
				name
				fullName
			}
		}
  	}
}
</static-query>

<script>
export default {
	name: "Patrons"
};
</script>

<style scoped>
.title {
	font-size: 22px;
	margin-bottom: 10px !important;
}

.patrons-background {
	background-color: rgb(31, 31, 31);
	padding: 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.patrons-names {
	width: 100%;
	text-align: center;
	margin-top: 30px;
	margin-bottom: 30px;
}

.patron-name {
	color: #fff;
	font-size: 18px;
}

.bullet {
	margin-left: 10px;
	margin-right: 10px;
}
.button {
	margin: 5px;
	border: none;
	color: #fff;
	width: 225px;
}

.patreon-button {
	background-color: #f96854;
}

@media (max-width: 768px) {
	.button {
		width: 100%;
	}
}
</style>
