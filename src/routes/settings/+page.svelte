<script lang="ts">
	import { darkState, isNavDown, sendDataToDatabase } from './../stores';
	import ToggleStoreUsingButton from './ToggleStoreUsingButton.svelte';
</script>

<div class="mx-auto flex max-w-96 flex-col gap-8 {$isNavDown ? 'pt-24' : 'pt-2'}">
	<ToggleStoreUsingButton
		toggleStateVar="{() => {
			$darkState = !$darkState;
		}}"
		getStateVar="{() => $darkState}"
		stateVarOutputs="{['Color Mode:', 'Dark Mode', 'Light Mode']}"
	></ToggleStoreUsingButton>
	<ToggleStoreUsingButton
		toggleStateVar="{() => {
			$sendDataToDatabase = !$sendDataToDatabase;
		}}"
		getStateVar="{() => $sendDataToDatabase}"
		stateVarOutputs="{['Send Data To Ranking:', 'Yes', 'No']}"
	></ToggleStoreUsingButton>
</div>

<style lang="postcss">
</style>
