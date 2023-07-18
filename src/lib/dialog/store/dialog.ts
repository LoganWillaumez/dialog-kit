import { DialogActions, DialogTypes, type Dialog, DialogTheme } from '$lib/types/dialog.js';
import { writable } from 'svelte/store';

const initialDialog: Dialog = {
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
  [DialogActions.ONCLOSE]: () => {},
  [DialogActions.ONCONFIRM]: () => {},
  [DialogActions.ONMIDDLE]: () => {}
};

const initialLoader = {
  showLoader: false,
  colorLoader: 'black',
  popUp: initialDialog
};

export const loader = writable(initialLoader);

export const setLoader = (
  showLoader: boolean,
  colorLoader: string = 'black',
  popUp: Partial<Dialog> = {}
): void => {
  resetLoader();
  loader.set({
    showLoader,
    colorLoader,
    popUp: {
      ...initialDialog,
      ...popUp
    }
  });
};

export const resetLoader = (): void => {
  loader.set(initialLoader);
};
