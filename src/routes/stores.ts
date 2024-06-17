import { writable } from 'svelte/store';
export const isBrowser = typeof window !== 'undefined';

export const isNavDown = writable(true);

export const darkState = writable(
	isBrowser && localStorage ?
		localStorage.getItem('darkState') == null ?
			true
		:	localStorage.getItem('darkState') === 'true'
	:	true,
);
export const sendDataToDatabase = writable(
	isBrowser && localStorage ?
		localStorage.getItem('sendDataToDatabase') === null ?
			true
		:	localStorage.getItem('sendDataToDatabase') === 'true'
	:	true,
);
export const highestHigherLowerScore = writable(
	isBrowser && localStorage ?
		localStorage.getItem('highestHigherLowerScore') === null ?
			0
		:	parseInt(localStorage.getItem('highestHigherLowerScore') ?? '0')
	:	0,
);

darkState.subscribe((value) => {
	if (isBrowser && localStorage) {
		localStorage.setItem('darkState', value.toString());
	}
});

sendDataToDatabase.subscribe((value) => {
	if (isBrowser && localStorage) {
		localStorage.setItem('sendDataToDatabase', value.toString());
	}
});

highestHigherLowerScore.subscribe((value) => {
	if (isBrowser && localStorage) {
		localStorage.setItem('highestHigherLowerScore', value.toString());
	}
});
