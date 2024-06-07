<script lang="ts">
	export let func;
</script>

<button
	on:click="{func}"
	class="flex h-full cursor-pointer items-center rounded-2xl border-2 border-primary p-4 text-center text-2xl shadow-xl shadow-background transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:border-accent active:translate-y-0 active:scale-95"
	><slot></slot></button
>

<style lang="postcss">
</style>
