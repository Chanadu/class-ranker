<script lang="ts">
	export let onClick: () => void;
	export let extraClasses: string = '';
</script>

<button
	class="diabled:pointer-events-none relative flex h-full w-full cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary bg-container p-4 text-center align-middle shadow-xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:border-accent active:translate-y-0 active:scale-95 active:shadow-none {extraClasses}"
	on:click="{onClick}"
>
	<slot></slot>
</button>

<style lang="postcss">
</style>
