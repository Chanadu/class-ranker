<script lang="ts">
	import { darkState, sendDataToDatabase } from './../stores';
	import ToggleStoreUsingButton from './ToggleStoreUsingButton.svelte';
</script>

<div class="mx-auto flex max-w-96 flex-col gap-8 py-12">
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
