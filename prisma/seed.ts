// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import userData from '../src/lib/data.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);

	for (const p of userData) {
		//		const vote = await prisma.vote.create({
		//			data: {
		//				winningClass: p.winningClass,
		//				losingClass: p.losingClass,
		//				createdAt: p.creationDate,
		//			},
		//		});
		//		console.log(`Created user with id: ${vote.id}`);
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
