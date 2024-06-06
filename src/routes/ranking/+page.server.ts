import prisma from '$lib/prisma';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
	const response = await prisma.rankedClass.findMany();

	return { feed: response };
}) satisfies PageServerLoad;
