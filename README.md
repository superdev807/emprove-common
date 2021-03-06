# EmproveIt [![CircleCI](https://circleci.com/gh/EmproveIt/emprove-common.svg?style=svg&circle-token=99d090d940d5ee6734723ff566d174ee5f977b71)](https://circleci.com/gh/EmproveIt/emprove-common)

## TL;DR for Development

```sh
npm install
npm link
npm run build:watch

# Go to other project that uses this package and run:
npm link emprove-common
```

## Installation From Another Project

> *SSH Keys*: This section assumes you have a public ssh key in GitHub. [Follow this guide](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) to generate your ssh key. Then, add the ssh *public* key (`~/.ssh/id_rsa.pub` file) to [your GitHub account settings](https://github.com/settings/keys).

> If you still get a permission error: (1) verify you have [your git user.name and user.email set up](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup); (2) clone this repository, if everything works then your credentials will be correct. Then try installing this package again from another project.

To use this package from another project, run the following command:

```sh
npm install ssh+git@github.com:EmproveIt/emprove-common.git
```

Alternatively, you can add the following to your `package.json` dependencies and run `npm install`:

```json
  "dependencies": {
    "emprove-common": "git+ssh://git@github.com/EmproveIt/emprove-common.git"
  }
```

You may choose to use a branch other than master. For example, to use version `0.0.1`, the repository url value should be appended with the branch/version name:

```
  "emprove-common": "git+ssh://git@github.com/EmproveIt/emprove-common.git#0.0.1"
```

## Usage From Another Project

```javascript
import { SomeComponent } from 'emprove-common';
```

## Development environment setup
Note:
- Node v10.15.3 and npm v6.4.1 are used for development (as of 05/28/2019).

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

**Note:** Running `npm install` from YOUR OTHER PROJECT might undo the linking, so you have to do it again. Check your `node_modules/emprove-common` directory file from YOUR OTHER PROJECT to see if you have a linked directory or the actual one. See [this NPM issue on GitHub](https://github.com/npm/npm/issues/17287).

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

### Git Workflow

This workflow was conceived because adding this package as a dependency with a repository URL for its value pulls code from a specific branch, no matter the `NODE_ENV`. See *Installation* section for more details.

Version branches are created from `master`. For example, the `0.0.1` branch is created from `master`. For development, create feature branches that are meant to be merged into the current version's branch. In the example, create feature branches from `0.0.1` and make PRs to merge into it.

Once a version is finished, merge the version branch into `master`. Then, branch off `master` with a new branch number. For example, after merging `0.0.1` back to `master`, create a new branch `0.0.2` from `master`.

For this project's `package.json`, don't forget to update the `version` number.

For projects that use this package, make sure to update the branch number in the `dependencies` section of its `package.json` to ensure it pulls code from the new version. For example, change the first piece of code into the next:

```
"emprove-common": "git+ssh/.../emprove-common.git#0.0.1"
```

```
"emprove-common": "git+ssh/.../emprove-common.git#0.0.2"
```

### Testing

We use [Jest](https://facebook.github.io/jest/) as the test framework. In addition, we use [Enzyme](http://airbnb.io/enzyme/) to test React components.

Place the tests under the `tests/` directory, following the same structure as the `src/` directory. Test files must have a `.test.js` suffix. For example, given the file `index.js`, the test file should be named `index.test.js`.

You can run the tests using:

```sh
npm test
```

To have the tests continually run on the background, use:

```sh
npm test:watch
```

### Linting

You can use [ESLint](https://eslint.org/) to analyze the code and make sure you are following a consistent style, didn't forget to use variables, etc.

You can either lint the codebase manually using the `eslint` command or you can use a text editor plugin that does that automatically as you go through your code.

The set of rules is defined in the root `.eslintrc.js` file. Additional files might be created under different directories to change the parsing parameters. For example, the files in the `tests` directory uses global variables that are defined by the test framework. Without specifiying an environment setting in the `.eslintrc.js` file, it would throw an error saying variables like `describe` and `test` were never defined.

You can add/remove/change rules as you wish, to conform to the standards of the project. Add the rule name to the `rules` property of the `.eslintrc` file, the value being the new setting.

#### Manual Lint

For this project, run:

```
npm run lint
```

#### Text Editor Plugin

Find the linter / eslint plugin for your favorite text editor.

Some examples:

* Atom: https://github.com/AtomLinter/linter-eslint
* Sublime: https://github.com/SublimeLinter/SublimeLinter-eslint
* VSCode: https://github.com/Microsoft/vscode-eslint
