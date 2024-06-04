<script lang="ts">
	export let optionText: string;
</script>

<button
	class="relative flex h-72 w-72 cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary text-center align-middle shadow-sm shadow-accent transition-all duration-200 hover:-translate-y-2 hover:border-secondary hover:shadow-lg active:translate-y-0 active:shadow-none disabled:pointer-events-none"
>
	<div class="absolute left-0 top-0 h-full w-full bg-secondary opacity-15"></div>
	<div class="flex h-full w-full items-center justify-center text-wrap px-4 py-4 text-2xl">{optionText}</div>
</button>

<style lang="postcss">
</style>
