<script lang="ts">
	export let onClick: () => void;
</script>

<button
	class="flex h-full w-full cursor-pointer items-center justify-center rounded-2xl border-2 border-primary bg-container p-4 transition-all duration-100 hover:-translate-y-2 hover:scale-105 hover:border-accent active:translate-y-0 active:scale-95"
	on:click="{onClick}"
>
	<slot></slot>
</button>

<style lang="postcss">
</style>
