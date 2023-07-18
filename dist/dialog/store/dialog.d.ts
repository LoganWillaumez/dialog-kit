/// <reference types="svelte" />
import { type Dialog } from '../../types/dialog.js';
export declare const loader: import("svelte/store").Writable<{
    showLoader: boolean;
    colorLoader: string;
    popUp: Dialog;
}>;
export declare const setLoader: (showLoader: boolean, colorLoader?: string, popUp?: Partial<Dialog>) => void;
export declare const resetLoader: () => void;
