import {
	writable
} from 'svelte/store';
export const isBrowser = typeof window !== 'undefined';
export const darkState = writable(true);

darkState.subscribe(value => {
	if (isBrowser && localStorage) {
		localStorage.setItem('darkState', value.toString());
	}
});