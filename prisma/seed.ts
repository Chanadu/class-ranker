// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import classData from '../src/lib/courses.json'; //assert { type: 'json' };
import voteData from '../src/lib/data.json'; //assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
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
		const cla = await prisma.class.create({
			data: {
				name: c.className,
				categories: c.categories,
				officalTags: c.classIDs,
				levels: c.classLevels,
			},
		});
		console.log('Created class with id: ');
	}
	console.log(`Seeding finished.`);
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
