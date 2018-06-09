# EmproveIt

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

## Usage From Another Project

```javascript
import { SomeComponent } from 'emprove-common';
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
