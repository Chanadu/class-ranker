<script lang="ts">
	export let onClick: () => void;
	export let extraClasses: string = 'p-4 w-full h-full';
</script>

<button
	class="{extraClasses} diabled:pointer-events-none relative flex cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary bg-container text-center align-middle shadow-xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:border-accent active:translate-y-0 active:scale-95 active:shadow-none"
	on:click="{onClick}"
>
	<slot></slot>
</button>

<style lang="postcss">
</style>
