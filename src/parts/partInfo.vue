<template>
	<div>
		<h1>{{ part.title }}</h1>
		<img :src="part.src" alt />
		<div>{{part.description}}</div>
		<div>{{part.cost}}</div>
	</div>
</template>

<script>
import getPartsMixin from './get-part-mixin'

export default {
	name: 'PartInfo',
	mixins: [getPartsMixin],
	props: {
		partType: { type: String },
		id: { type: [Number, String] },
		validator(value) {
			return Number.isInteger(Number(value))
		}
	},

	name: 'PartInfo',
	computed: {
		part() {
			const { partType, id } = this
			return this.parts[partType].find(part => part.id === +id)
		}
	}
}
</script>