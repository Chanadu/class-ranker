import { currentClassHigherLower } from '../stores';

import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import console from 'console';
import { get } from 'svelte/store';
import type { PageServerLoad } from '../$types';

let rankedClassesList = await prisma.rankedClass.findMany();

if (rankedClassesList.length === 0) {
	console.log('Class List doesnt exist');
	throw redirect(301, '/server-error');
}
export const load = (async () => {
	let index;
	let indexAlreadySet = false;
	let currentClassHigherLowerValue = localStorage.getItem('currentClassHigherLower');
	if (currentClassHigherLowerValue !== null && currentClassHigherLowerValue) {
		console.log('currentClassHigherLower', get(currentClassHigherLower));
		indexAlreadySet = true;
		let currentClass = await prisma.class.findFirst({
			where: {
				name: get(currentClassHigherLower)!,
			},
		});
		if (currentClass === null) {
			throw redirect(301, '/server-error');
		}
		index = rankedClassesList.findIndex((rankedClass) => rankedClass.name === currentClass.name);
	} else {
		console.log('NO currentClassHigherLower', get(currentClassHigherLower));
	}
	let index2;
	do {
		if (!indexAlreadySet) {
			index = Math.floor(Math.random() * (rankedClassesList.length - 1));
		}
		index2 = Math.floor(Math.random() * (rankedClassesList.length - 1));
		while (index === index2) {
			index2 = Math.floor(Math.random() * (rankedClassesList.length - 1));
		}
	} while (
		(rankedClassesList[index!].winningPercentage < 0 ? 0 : rankedClassesList[index!].winningPercentage) ===
		(rankedClassesList[index2].winningPercentage < 0 ? 0 : rankedClassesList[index2].winningPercentage)
	);

	let option1RankedClass = rankedClassesList[index!];
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
