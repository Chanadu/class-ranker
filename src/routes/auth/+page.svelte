<script lang="ts">
	import PocketBase from 'pocketbase';

	const pb = new PocketBase('http://localhost:8090');

	async function login(form: HTMLFormElement) {
		try {
			await pb.collection('users').authWithOAuth2({ provider: 'google' });
			form.token.value = pb.authStore.token;
			form.submit();
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="flex h-screen items-center justify-center">
	<form
		method="post"
		on:submit|preventDefault="{(e) => login(e.currentTarget)}"
	>
		<input
			name="token"
			type="hidden"
		/>
		<button
			type="submit"
			class="mt-10 rounded border p-2 transition-all duration-100 hover:bg-primary hover:text-background"
		>
			Login using Google
		</button>
	</form>
</div>
