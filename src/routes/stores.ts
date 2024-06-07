import { writable } from 'svelte/store';
export const isBrowser = typeof window !== 'undefined';

export const darkState = writable(isBrowser && localStorage ? localStorage.getItem('darkState') === 'true' : true);
export const sendDataToDatabase = writable(
	isBrowser && localStorage ? localStorage.getItem('sendDataToDatabase') === 'true' : true,
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
