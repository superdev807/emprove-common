# EmproveIt

## Development environment setup
Note:
- Node v8.10.0 and npm v5.6.0 are used for development (as of 04/22/2018).

Contains all the shared components, utility files, etc.

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

You may choose to use a branch other than master. For example, to use version 0.0.1, the repository url value should be appended with the branch/version name:

```
"git+ssh://git@github.com/EmproveIt/emprove-common.git#0.0.1"
```
