<script lang="ts">
	import SettingsCard from './SettingsCard.svelte';
	export let toggleStateVar: () => void;
	export let getStateVar: () => boolean;
	export let stateVarOutputs: string[];
</script>

<SettingsCard>
	<button
		on:click="{() => toggleStateVar()}"
		class="flex h-full w-full flex-row justify-between px-8 py-4"
	>
		<div>{stateVarOutputs[0]}</div>
		<div>
			{getStateVar() ? stateVarOutputs[1] : stateVarOutputs[2]}
		</div>
	</button>
</SettingsCard>

<style lang="postcss">
</style>
