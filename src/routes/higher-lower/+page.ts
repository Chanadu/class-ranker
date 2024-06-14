import type { Class, RankedClass } from '@prisma/client';
import { get } from 'svelte/store';
import type { PageServerLoad } from '../$types';
import { currentClassHigherLower } from './stores';

export const load: PageServerLoad = async ({ fetch }) => {
	let rankedClassList: RankedClass[] = (
		await (
			await fetch('/higher-lower', {
				method: 'POST',
				body: JSON.stringify({
					databaseType: 'rankedClass',
					className: '',
				}),
			})
		).json()
	).filter((rankedClass: RankedClass) => rankedClass.winningPercentage >= 0);

	let index: number = 0;
	let index2: number;
	let indexAlreadySet = false;

	let currentClassHigherLowerValue = get(currentClassHigherLower);

	if (currentClassHigherLowerValue !== null && currentClassHigherLowerValue !== '') {
		indexAlreadySet = true;

		index = rankedClassList.findIndex(
			(rankedClass: RankedClass) => rankedClass.name === currentClassHigherLowerValue,
		);
	}

	do {
		if (!indexAlreadySet) {
			index = Math.floor(Math.random() * (rankedClassList.length - 1));
		}
		index2 = Math.floor(Math.random() * (rankedClassList.length - 1));
		while (index === index2) {
			index2 = Math.floor(Math.random() * (rankedClassList.length - 1));
		}
	} while (rankedClassList[index].winningPercentage === rankedClassList[index2].winningPercentage);

	let option1RankedClass = rankedClassList[index!];
	let option2RankedClass = rankedClassList[index2];

	let option1Class: Class = await (
		await fetch('/higher-lower', {
			method: 'POST',
			body: JSON.stringify({
				databaseType: 'class',
				className: option1RankedClass.name,
			}),
		})
	).json();

	let option2Class: Class = await (
		await fetch('/higher-lower', {
			method: 'POST',
			body: JSON.stringify({
				databaseType: 'class',
				className: option2RankedClass.name,
			}),
		})
	).json();

	return {
		classes: { option1: option1Class, option2: option2Class },
		rankedClasses: { option1: option1RankedClass, option2: option2RankedClass },
	};
};
