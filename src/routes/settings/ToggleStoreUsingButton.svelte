<script lang="ts">
	import Button from '$lib/components/button.svelte';
	export let toggleStateVar: () => void;
	export let getStateVar: () => boolean;
	export let stateVarOutputs: string[];
</script>

<div class="flex min-h-4 items-center justify-center text-2xl">
	<Button onClick="{() => toggleStateVar()}">
		<div class="flex h-full w-full flex-row justify-between p-2">
			<div>{stateVarOutputs[0]}</div>
			<div>
				{getStateVar() ? stateVarOutputs[1] : stateVarOutputs[2]}
			</div>
		</div>
	</Button>
</div>

<style lang="postcss">
</style>
