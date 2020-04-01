<template>
	<div class="patrons">
		<h3
			class="title has-text-centered has-text-white"
		>A big thank you to our top tier Patrons, their contributions help the show operate!</h3>
		<div class="patrons-outer container">
			<div
				class="patron-names has-text-centered"
				v-for="(patron, index) in $static.allPatrons.edges"
				:key="patron.id"
			>
				<span class="patron-name is-italic">{{patron.node.name ? patron.node.name : patron.node.fullName}}</span>
				<span>{{index != Object.keys($static.allPatrons.edges).length - 1 ? '&bull;' : ''}}</span>
			</div>
		</div>
		<h3
			class="subtitle has-text-centered has-text-white"
		>Would you like to contribute to the show as well? Check out our Patreon!</h3>
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

.patrons {
	background-color: rgb(31, 31, 31);
	padding: 50px;
}
.patrons-outer {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	margin-top: 30px;
	margin-bottom: 30px;
}

.patron-name {
	color: #fff;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 18px;
}

.button {
	margin: 5px;
	border: none;
	color: #fff;
	width: 175px;
}

@media (max-width: 768px) {
	.button {
		width: 100%;
	}
}

</style>
