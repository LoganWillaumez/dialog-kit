import { DialogActions, DialogTypes, DialogTheme } from '../../types/dialog.js';
import { writable } from 'svelte/store';
const initialDialog = {
    title: '',
    cancel: 'Cancel',
    message: '',
    button: '',
    theme: DialogTheme.DARK,
    confirmButton: '',
    middleButton: '',
    middleButtonColor: '',
    confirmButtonColor: '',
    cancelButtonColor: '',
    type: DialogTypes.SUCCESS,
    verticalConfirm: false,
    [DialogActions.ONCLOSE]: () => { },
    [DialogActions.ONCONFIRM]: () => { },
    [DialogActions.ONMIDDLE]: () => { }
};
const initialLoader = {
    showLoader: false,
    colorLoader: 'black',
    opacityLoader: 0.5,
    popUp: initialDialog
};
export const loader = writable(initialLoader);
export const setLoader = (showLoader, colorLoader = 'black', opacityLoader = 0.5, popUp = {}) => {
    resetLoader();
    loader.set({
        showLoader,
        colorLoader,
        opacityLoader,
        popUp: {
            ...initialDialog,
            ...popUp
        }
    });
};
export const resetLoader = () => {
    loader.set(initialLoader);
};
