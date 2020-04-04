<template>
	<div>
		<div class="top-row">
			<div class="top part">
				<img :src="availableParts.heads[selectedHeadIndex].src" title="head" />
				<button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
				<button @click="selectNextHead()" class="next-selector">&#9658;</button>
			</div>
		</div>
		<div class="middle-row">
			<div class="left part">
				<img :src="availableParts.arms[selectedArmLeftIndex].src" title="left arm" />
				<button @click="selectPreviousArm()" class="prev-selector">&#9650;</button>
				<button @click="selectNextArm()" class="next-selector">&#9660;</button>
			</div>
			<div class="center part">
				<img :src="availableParts.torsos[selectedTorsosIndex].src" title="left arm" />
				<button @click="selectPreviousTorsos()" class="prev-selector">&#9668;</button>
				<button @click="selectNextTorsos()" class="next-selector">&#9658;</button>
			</div>
			<div class="right part">
				<img :src="availableParts.arms[selectedArmRightIndex].src" title="left arm" />
				<button @click="selectPreviousArmRight()" class="prev-selector">&#9650;</button>
				<button @click="selectNextArmRight()" class="next-selector">&#9660;</button>
			</div>
		</div>
		<div class="bottom-row">
			<div class="bottom part">
				<img :src="availableParts.bases[selectedBaseIndex].src" title="left arm" />
				<button @click="selectPreviousBases()" class="prev-selector">&#9668;</button>
				<button @click="selectNextBases()" class="next-selector">&#9658;</button>
			</div>
		</div>
	</div>
</template>

<script>
import availableParts from '../data/parts'

function getPreviousValidIndex(index, length) {
	const depracatedIndex = index - 1
	return depracatedIndex < 0 ? length - 1 : depracatedIndex
}

function getNextValidIndex(index, length) {
	const incrementedIndex = index + 1
	return incrementedIndex > length - 1 ? 0 : incrementedIndex
}

export default {
	name: 'RobotBuilder',
	data() {
		return {
			availableParts,
			selectedHeadIndex: 0,
			selectedArmLeftIndex: 0,
			selectedArmRightIndex: 0,
			selectedTorsosIndex: 0,
			selectedBaseIndex: 0
		}
	},
	methods: {
		selectNextHead() {
			this.selectedHeadIndex = getNextValidIndex(
				this.selectedHeadIndex,
				availableParts.heads.length
			)
		},
		selectPreviousHead() {
			this.selectedHeadIndex = getPreviousValidIndex(
				this.selectedHeadIndex,
				availableParts.heads.length
			)
		},
		selectNextArm() {
			this.selectedArmLeftIndex = getNextValidIndex(
				this.selectedArmLeftIndex,
				availableParts.arms.length
			)
		},
		selectPreviousArm() {
			this.selectedArmLeftIndex = getPreviousValidIndex(
				this.selectedArmLeftIndex,
				availableParts.arms.length
			)
		},
		selectNextTorsos() {
			this.selectedTorsosIndex = getNextValidIndex(
				this.selectedTorsosIndex,
				availableParts.torsos.length
			)
		},
		selectPreviousTorsos() {
			this.selectedTorsosIndex = getPreviousValidIndex(
				this.selectedTorsosIndex,
				availableParts.torsos.length
			)
		},
		selectNextArmRight() {
			this.selectedArmRightIndex = getNextValidIndex(
				this.selectedArmRightIndex,
				availableParts.arms.length
			)
		},
		selectPreviousArmRight() {
			this.selectedArmRightIndex = getPreviousValidIndex(
				this.selectedArmRightIndex,
				availableParts.arms.length
			)
		},
		selectNextBases() {
			this.selectedBaseIndex = getNextValidIndex(
				this.selectedBaseIndex,
				availableParts.bases.length
			)
		},
		selectPreviousBases() {
			this.selectedBaseIndex = getPreviousValidIndex(
				this.selectedBaseIndex,
				availableParts.bases.length
			)
		}
	}
}
</script>

<style>
.part {
	position: relative;
	width: 165px;
	height: 165px;
	border: 3px solid #aaa;
}
.part img {
	width: 165px;
}
.top-row {
	display: flex;
	justify-content: space-around;
}
.middle-row {
	display: flex;
	justify-content: center;
}
.bottom-row {
	display: flex;
	justify-content: space-around;
	border-top: none;
}
.head {
	border-bottom: none;
}
.left {
	border-right: none;
}
.right {
	border-left: none;
}
.left img {
	transform: rotate(-90deg);
}
.right img {
	transform: rotate(90deg);
}
.bottom {
	border-top: none;
}
.prev-selector {
	position: absolute;
	z-index: 1;
	top: -3px;
	left: -28px;
	width: 25px;
	height: 171px;
}
.next-selector {
	position: absolute;
	z-index: 1;
	top: -3px;
	right: -28px;
	width: 25px;
	height: 171px;
}
.center .prev-selector,
.center .next-selector {
	opacity: 0.8;
}
.left .prev-selector {
	top: -28px;
	left: -3px;
	width: 144px;
	height: 25px;
}
.left .next-selector {
	top: auto;
	bottom: -28px;
	left: -3px;
	width: 144px;
	height: 25px;
}
.right .prev-selector {
	top: -28px;
	left: 24px;
	width: 144px;
	height: 25px;
}
.right .next-selector {
	top: auto;
	bottom: -28px;
	left: 24px;
	width: 144px;
	height: 25px;
}
.right .next-selector {
	right: -3px;
}
</style>