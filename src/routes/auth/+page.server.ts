import { redirect } from '@sveltejs/kit';
import { CookieSerializeOptions } from '../../app';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const token = form.get('token');
		if (!token || typeof token !== 'string') {
			throw redirect(303, '/auth');
		}
		cookies.set('pb_auth', JSON.stringify({ token: token }), CookieSerializeOptions());
		throw redirect(303, '/');
	},
} satisfies Actions;
