<script lang="ts">
	export let func;
</script>

<button
	on:click="{func}"
	class="flex h-full cursor-pointer items-center rounded-2xl border-2 border-primary p-2 text-center text-lg shadow-xl shadow-background transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:border-accent active:translate-y-0 active:scale-95 md:p-4 md:text-2xl"
	><slot></slot></button
>

<style lang="postcss">
</style>
