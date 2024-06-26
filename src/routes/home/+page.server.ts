import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
let classesList = await prisma.class.findMany();

try {
} catch (e) {
	console.log(e);
}

if (classesList.length === 0) {
	console.log('Classs List doesnt exist');
	throw redirect(301, '/server-error');
}
export const load = (async () => {
	let index = Math.floor(Math.random() * (classesList.length - 1));
	let index2 = Math.floor(Math.random() * (classesList.length - 1));
	while (index === index2) {
		index2 = Math.floor(Math.random() * (classesList.length - 1));
	}
	return { option1: classesList[index], option2: classesList[index2] };
}) satisfies PageServerLoad;
