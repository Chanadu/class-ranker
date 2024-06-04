import type { PageServerLoad } from './$types';

let classesList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

export const load = (async () => {
	let index = Math.floor(Math.random() * (classesList.length - 1));
	let index2 = Math.floor(Math.random() * (classesList.length - 1));
	while (index === index2) {
		index2 = Math.floor(Math.random() * (classesList.length - 1));
	}
	return { option1: classesList[index], option2: classesList[index2] };
}) satisfies PageServerLoad;
