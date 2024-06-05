import prisma from '$lib/prisma';
import type { RankedClass } from '@prisma/client';
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
		const class1: RankedClass = prisma.rankedClass.findFirst({
			where: {
				name: option1,
			},
		});
		const class2: RankedClass = prisma.rankedClass.findFirst({
			where: {
				name: option2,
			},
		});

		await prisma.rankedClass.update({
			where: { name: option1 },
			data: {
				name: option1,
				winningVotes: class1.winningVotes + 1,
				losingVotes: class1.losingVotes,
				winningPercentage: (class1.winningVotes + 1) / class1.losingVotes,
			},
		});
	} catch (e) {
		console.log(e);
	}
	return Promise.resolve(new Response());
}
