# EmproveIt

## TL;DR for Development

```sh
npm install
npm link
npm run build:watch

# Go to other project that uses this package and run:
npm link emprove-common
```

## Development environment setup
Note:
- Node v8.10.0 and npm v5.6.0 are used for development (as of 04/22/2018).

Contains all the shared components, utility files, etc.

Run the following command to install all dependencies:

```
npm install
```

### Linking

This is important if you would like the local changes to be reflected in your other project that includes this package. This allows you test the new changes without having to push to GitHub and re-install the package.

Link this package to the global `node_modules` using:

```sh
npm link
```

Then, from YOUR OTHER PROJECT root directory, run:

```sh
npm link emprove-common
```

### Building

The `src/` directory contains code written in ES6. That code needs to be transpiled to ES5. Run the following command to transpile the code to ES5 using Babel:

```sh
npm run build
```

The `build/` directory contains all the code transpiled to ES5. This directory is served to other projects. At this time, the `build/` directory **needs to be committed** to the repository so that other projects get the transpiled code when they fetch the repository.

To facilitate development, you can use the build command with a watch parameter. Code changes will automatically rebuild the codebase.

```sh
npm run build:watch
```

## Installation

To use this package from another project, run the following command:

```sh
npm install ssh+git@github.com:EmproveIt/emprove-common.git
```

Alternatively, you can add the following to your `package.json` dependencies:

```json
  "dependencies": {
    "emprove-common": "git+ssh://git@github.com/EmproveIt/emprove-common.git"
  }
```

You may choose to use a branch other than master. For example, to use version `0.0.1`, the repository url value should be appended with the branch/version name:

```
"git+ssh://git@github.com/EmproveIt/emprove-common.git#0.0.1"
```

## Usage

```javascript
import { SomeComponent } from 'emprove-common';
```
