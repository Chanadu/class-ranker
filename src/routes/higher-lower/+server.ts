import prisma from '$lib/prisma';
import type { Class, RankedClass } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { databaseType, className }: { databaseType: string; className: string } = await request.json();

	let currentClass: Class | Class[] | RankedClass | RankedClass[] | null;

	if (databaseType == 'class') {
		if (className === '') {
			currentClass = await prisma.class.findMany();
		} else {
			currentClass = await prisma.class.findFirst({
				where: {
					name: className,
				},
			})!;
		}
	} else {
		if (className === '') {
			currentClass = await prisma.rankedClass.findMany();
		} else {
			currentClass = await prisma.rankedClass.findFirst({
				where: {
					name: className,
				},
			})!;
		}
	}

	if (currentClass === null) {
		throw redirect(301, '/server-error');
	}

	return new Response(JSON.stringify(currentClass));
};
