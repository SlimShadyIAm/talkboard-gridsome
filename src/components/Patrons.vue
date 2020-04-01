<template>
	<div class="patrons">
		<h3
			class="subtitle has-text-centered has-text-white is-italic"
		>A thank you to our Patrons who help keep the show alive</h3>
		<br />
		<div class="patrons-outer container">
			<div
				class="patron-names has-text-centered"
				v-for="(patron, index) in $static.allPatrons.edges"
				:key="patron.id"
			>
				<span class="patron-name">{{patron.node.name ? patron.node.name : patron.node.fullName}}</span>
				<span>{{index != Object.keys($static.allPatrons.edges).length - 1 ? '&bull;' : ''}}</span>
			</div>
		</div>
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
.patrons {
	background-color: rgb(31, 31, 31);
	padding: 50px;
}
.patrons-outer {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
}

.patron-name {
	color: #fff;
	margin-left: 10px;
	margin-right: 10px;
}
</style>
