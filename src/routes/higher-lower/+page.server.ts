import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

let rankedClassesList = await prisma.rankedClass.findMany();

try {
} catch (e) {
	console.log(e);
}

if (rankedClassesList.length === 0) {
	console.log('Class List doesnt exist');
	throw redirect(301, '/server-error');
}
export const load = (async () => {
	let index;
	let index2;
	do {
		index = Math.floor(Math.random() * (rankedClassesList.length - 1));
		index2 = Math.floor(Math.random() * (rankedClassesList.length - 1));
		while (index === index2) {
			index2 = Math.floor(Math.random() * (rankedClassesList.length - 1));
		}
	} while (rankedClassesList[index].winningPercentage === rankedClassesList[index2].winningPercentage);

	let option1RankedClass = rankedClassesList[index];
	let option2RankedClass = rankedClassesList[index2];

	let option1Class = await prisma.class.findFirst({
		where: {
			name: option1RankedClass.name,
		},
	});
	let option2Class = await prisma.class.findFirst({
		where: {
			name: option2RankedClass.name,
		},
	});
	if (option1Class === null || option2Class === null) {
		throw redirect(301, '/server-error');
	}
	return {
		classes: { option1: option1Class!, option2: option2Class! },
		rankedClasses: { option1: option1RankedClass!, option2: option2RankedClass! },
	};
}) satisfies PageServerLoad;

export const actions = async () => {
	return;
};
