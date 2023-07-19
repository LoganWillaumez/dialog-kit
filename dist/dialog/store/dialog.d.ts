/// <reference types="svelte" />
import { type Dialog } from '../../types/dialog.js';
export declare const loader: import("svelte/store").Writable<{
    showLoader: boolean;
    colorLoader: string;
    opacityLoader: number;
    popUp: Dialog;
}>;
export declare const setLoader: (showLoader: boolean, colorLoader?: string, opacityLoader?: number, popUp?: Partial<Dialog>) => void;
export declare const resetLoader: () => void;
