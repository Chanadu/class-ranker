import prisma from '$lib/prisma';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return new Response();
};

export async function POST({ request }: { request: any }) {
	const { option1, option2 } = await request.json();
	try {
		await prisma.vote.create({
			data: {
				winningClass: option1,
				losingClass: option2,
				createdAt: new Date().toISOString(),
			},
		});
	} catch (e) {
		console.log(e);
	}
	return Promise.resolve(new Response());
}
