# EmproveIt

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
