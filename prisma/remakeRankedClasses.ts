// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log(`Start Remaking...`);
	let votes = await prisma.vote.findMany();
	let classes = await prisma.rankedClass.findMany();
	let rankedClasses = await prisma.rankedClass.findMany();
	for (let c of rankedClasses) {
		await prisma.rankedClass.update({
			where: {
				id: c.id,
			},
			data: {
				winningVotes: 0,
				losingVotes: 0,
				winningPercentage: -1.0,
			},
		});
	}
	for (let vote of votes) {
		let class1 = await prisma.rankedClass.findFirst({
			where: {
				name: vote.winningClass,
			},
			select: {
				id: true,
				name: true,
				winningVotes: true,
				losingVotes: true,
				winningPercentage: true,
			},
		});
		let class2 = await prisma.rankedClass.findFirst({
			where: {
				name: vote.losingClass,
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
			continue;
		}
		await prisma.rankedClass.update({
			where: {
				id: class1.id,
			},
			data: {
				name: vote.winningClass,
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
				name: vote.losingClass,
				winningVotes: class2.winningVotes,
				losingVotes: class2.losingVotes + 1,
				winningPercentage: class2.winningVotes / (class2.losingVotes + class2.winningVotes + 1),
			},
		});
	}
	console.log(`Finished Remaking...`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		//process.exit(1);
	});
