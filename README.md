# Dialog-Kit

`Dialog-Kit` is a comprehensive library designed specifically for SvelteKit, simplifying the process of creating interactive and customizable dialog boxes in your web applications.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    - [Displaying a Loader](#displaying-a-loader)
    - [Displaying a Dialog Box](#displaying-a-dialog-box)
3. [Customization](#customization)
4. [Visual Examples](#visual-examples)
    - [Loaders](#loaders)
    - [Dialog Boxes](#dialog-boxes)

## Installation

`Dialog-Kit` can be installed using npm, pnpm or yarn:

**npm:**

```
npm install @willog/dialog-kit
```

**pnpm:**

```
pnpm add @willog/dialog-kit
```

**yarn:**

```
yarn add @willog/dialog-kit
```

## Usage

Start by importing the `Dialog-Kit`:

```javascript
import { DialogActions, DialogTypes, DialogTheme } from '$lib/types/dialog.js';
import { setLoader, resetLoader } from 'dialog-kit';
```

### Displaying a Loader

`Dialog-Kit` allows you to display a simple loader with the `setLoader` function:

```javascript
setLoader(true);
```

You can also customize the color and opacity of the loader:

```javascript
setLoader(true, 'blue', 0.5); 
// This will display a blue loader with 0.5 opacity
```

### Displaying a Dialog Box

To display a dialog box, use the `setLoader` function with an object parameter to customize the dialog box:

```javascript
setLoader(true, undefined, undefined, {
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

You can reset the loader and dialog box to their initial states with the `resetLoader` function:

```javascript
resetLoader();
```

## Customization

`Dialog-Kit` supports full customization of the dialog box using the `popUp` object passed to `setLoader`. The object can contain the following properties:

- `title` (string): The title of the dialog box.
- `cancel` (string): The text of the cancel button.
- `message` (string): The message of the dialog box.
- `theme` (DialogTheme): The theme of the dialog box. It can be either `DialogTheme.DARK` or `DialogTheme.LIGHT`.
- `type` (DialogTypes): The type of the dialog box. It can be `DialogTypes.ERROR`, `DialogTypes.SUCCESS`, `DialogTypes.INFO` or `DialogTypes.WARNING`.
- `button` (string): The text of the confirmation button.
- `confirmButton` (string): The text of the confirm button.
- `middleButton` (string): The text of the middle button.
- `middleButtonColor` (string): The color of the middle button.
- `confirmButtonColor` (string): The color of the confirm button.
- `cancelButtonColor` (string): The color of the cancel button.
- `verticalConfirm` (boolean): Determines whether the confirm buttons should be displayed vertically.
- `[DialogActions.ONCLOSE]` (function): A function to execute when the dialog box is closed.
- `[DialogActions.ONCONFIRM]` (function): A function to execute when the confirm button is clicked.
- `[DialogActions.ONMIDDLE]` (function): A function to execute when the middle button is clicked.

All properties are optional and have default values if not specified.

## Visual Examples

In this section, you will find visual examples of what you can create with `Dialog-Kit`.

### Loaders

![Loader Examples](https://github.com/LoganWillaumez/dialog-kit/assets/60406970/b7d6720a-af94-4404-b292-11318fa48ed7)

Here are examples of loaders that you can display with `Dialog-Kit`. You can see default loaders, as well as loaders with custom colors and opacities.

### Dialog Boxes

![Dialog Box Examples](https://github.com/LoganWillaumez/dialog-kit/assets/60406970/567d3087-df96-4df2-9816-72cc2c73712e)


This image showcases different types of dialog boxes that `Dialog-Kit` can create. You can see error, success, info, and warning dialog boxes, each fully customizable with a range of properties.