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
		const class1 = await prisma.rankedClass.findFirst({
			where: {
				name: option1,
			},
			select: {
				id: true,
				name: true,
				winningVotes: true,
				losingVotes: true,
				winningPercentage: true,
			},
		});
		const class2 = await prisma.rankedClass.findFirst({
			where: {
				name: option2,
			},
			select: {
				id: true,
				name: true,
				winningVotes: true,
				losingVotes: true,
				winningPercentage: true,
			},
		});

		if (class1 == undefined || class2 == undefined) {
			return;
		}

		await prisma.rankedClass.update({
			where: {
				id: class1.id,
			},
			data: {
				name: option1,
				winningVotes: class1.winningVotes + 1,
				losingVotes: class1.losingVotes,
				winningPercentage: (class1.winningVotes + 1) / (class1.losingVotes + class1.winningVotes + 1),
			},
		});
		await prisma.rankedClass.update({
			where: {
				id: class2.id,
			},
			data: {
				name: option2,
				winningVotes: class2.winningVotes,
				losingVotes: class2.losingVotes + 1,
				winningPercentage: class2.winningVotes / (class2.losingVotes + class2.winningVotes + 1),
			},
		});
	} catch (e) {
		console.log(e);
	}
	return Promise.resolve(new Response());
}
