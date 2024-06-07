import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import console from 'console';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
	let response;
	try {
		await prisma.$queryRaw`SELECT 1`;
		response = await prisma.rankedClass.findMany();
	} catch (e) {
		console.log('ERROR: ', e);
		throw redirect(301, '/server-error');
	}

	return { feed: response };
}) satisfies PageServerLoad;
