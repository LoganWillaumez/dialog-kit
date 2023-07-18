# README

## Dialog-Kit

`Dialog-Kit` is a library specifically designed for SvelteKit that simplifies creating interactive, customizable dialog boxes in your web applications.

### Installation

You can install `Dialog-Kit` using npm, pnpm or yarn:

**npm:**

```bash
npm install dialog-kit
```

**pnpm:**

```bash
pnpm add dialog-kit
```

**yarn:**

```bash
yarn add dialog-kit
```

### Usage

To use `Dialog-Kit`, first import the library:

```javascript
import { DialogActions, DialogTypes, DialogTheme } from '$lib/types/dialog.js';
import { setLoader, resetLoader } from 'dialog-kit';
```

#### Displaying a Loader

`Dialog-Kit` allows you to display a simple loader using the `setLoader` function with only the first parameter:

```javascript
setLoader(true);
```

To customize the color of the loader, you can use the second parameter:

```javascript
setLoader(true, 'blue');
```

#### Displaying a Dialog Box

To display a dialog box, you can use the third parameter of the `setLoader` function, which is an object allowing for the customization of the dialog box.

Here is an example of how `setLoader` can be used to display a dialog box:

```javascript
setLoader(true, 'red', {
  title: 'Error',
  cancel: 'Cancel',
  message: 'Something went wrong',
  theme: DialogTheme.DARK,
  type: DialogTypes.ERROR,
  [DialogActions.ONCLOSE]: () => {
    console.log('Dialog closed');
  },
});
```

To reset the loader and dialog box to their initial state, use the `resetLoader` function:

```javascript
resetLoader();
```

### Customization

The dialog box can be fully customized via the `popUp` object passed to `setLoader`. The following properties can be set:

- `title` (string): The title of the dialog box.
- `cancel` (string): The text of the cancel button.
- `message` (string): The message of the dialog box.
- `theme` (DialogTheme): The theme of the dialog box. Can be `DialogTheme.DARK` or `DialogTheme.LIGHT`.
- `type` (DialogTypes): The type of dialog box. Can be `DialogTypes.ERROR`, `DialogTypes.SUCCESS`, `DialogTypes.INFO` or `DialogTypes.WARNING`.
- `button` (string): The text of the confirmation button.
- `confirmButton` (string): The text of the confirm button.
- `middleButton` (string): The text of the middle button.
- `middleButtonColor` (string): The color of the middle button.
- `confirmButtonColor` (string): The color of the confirm button.
- `cancelButtonColor` (string): The color of the cancel button.
- `verticalConfirm` (boolean): Indicates whether the confirm buttons should be displayed vertically.
- `[DialogActions.ONCLOSE]` (function): The function to execute when the dialog box is closed.
- `[DialogActions.ONCONFIRM]` (function): The function to execute when the confirm button is clicked.
- `[DialogActions.ONMIDDLE]` (function): The function to execute when the middle button is clicked.

Note that all properties are optional and have default values if not specified.