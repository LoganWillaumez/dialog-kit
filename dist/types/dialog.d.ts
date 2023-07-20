export declare enum DialogTypes {
    ERROR = "error",
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning"
}
export declare enum DialogActions {
    ONCLOSE = "onClose",
    ONCONFIRM = "onConfirm",
    ONMIDDLE = "onMiddle",
    ONCLICKOUTSIDE = "onClickOutside"
}
export type Dialog = {
    title: string;
    message: string;
    cancel: string;
    type: DialogTypes;
    theme: DialogTheme;
    button: string;
    confirmButton: string;
    middleButtonColor: string;
    confirmButtonColor: string;
    cancelButtonColor: string;
    middleButton: string;
    verticalConfirm: boolean;
    [DialogActions.ONCLOSE]: () => void;
    [DialogActions.ONCONFIRM]: () => void;
    [DialogActions.ONMIDDLE]: () => void;
    [DialogActions.ONCLICKOUTSIDE]: () => void;
};
export declare enum DialogTheme {
    DARK = "dark",
    LIGHT = "light"
}
