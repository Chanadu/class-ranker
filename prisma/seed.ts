// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import classData from '../src/lib/courses.json'; //assert { type: 'json' };
import voteData from '../src/lib/data.json'; //assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	// assert(false); // DONT USE THSI FILE, I ALREADY SEEDED THE DATABASE
	console.log(`Start seeding ...`);

	for (const p of voteData) {
		//		const vote = await prisma.vote.create({
		//			data: {
		//				winningClass: p.winningClass,
		//				losingClass: p.losingClass,
		//				createdAt: p.creationDate,
		//			},
		//		});
		//		console.log(`Created user with id: ${vote.id}`);
	}
	for (const c of classData) {
		await prisma.class.create({
			data: {
				name: c.className.toUpperCase(),
				categories: c.categories,
				officalTags: c.classIDs,
				levels: c.classLevels,
			},
		});
		await prisma.rankedClass.create({
			data: {
				name: c.className.toUpperCase(),
				winningPercentage: -1.0,
				winningVotes: 0,
				losingVotes: 0,
			},
		});
	}
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
