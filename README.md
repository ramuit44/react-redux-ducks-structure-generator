# React & Redux Duck Structure Generator 


A Yeoman generator for React & Redux for projects basing on the ducks structure structured on routes.

This generator works for vertically integrated React and Redux projects. The
sub-generator will create modules/features for you with a smaller version of the
ducks structure. Each module is self-contained, although there may be a
base that is `common` to everything else.

## Installation

### Yeoman

For this generator to work, [Yeoman](https://github.com/yeoman/yo) must be globally installed.

```bash
npm install -g yo
```

Then you can install this `react-redux-duck-structure-generator` module.

```bash
npm install -g react-redux-duck-structure-generator
```

## Base Generator

Creates the base project. Loosely based off [React-starter-kit](https://github.com/kriasoft/react-starter-kit). The entrie app is not ducks structure yet.

```bash
yo react-redux-duck-structure-generator
```

This will compile base files, including the Source, and Tools folders. (tests pending)

<!-- `In Progress`: Tests -->

### Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `-h`, `--help`     | Print the generator's options and usage    |                |
| `--skip-cache`     | Do not remember prompt answers             | Default: false |
| `--skip-install`   | Do not automatically install dependencies  | Default: false |

## Sub-generators

The sub generators assumes you already have a project up and running. They are to
help you through developing new modules, components, etc.

### Module

When you need to start creating new modules/features, simple use the sub-generator `module`.

```bash
yo react-redux-duck-structure-generator:module [options] <moduleName>
```

Within the module sub-generator, the following default files are generated for you.
Replace <moduleName> with your own module name.

#### Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `-h`, `--help`     | Print the generator's options and usage    |                |
| `--skip-cache`     | Do not remember prompt answers             | Default: false |
| `--skip-install`   | Do not automatically install dependencies  | Default: false |

#### Arguments

| Arguments   | Description | Type | Required |
| ----------- | ----------- | ---- | -------- |
| moduleName  | Name of the module | String | true |

#### Examples

The following command will generate the following:

```bash
yo react-redux-modules:module auth
# Generates the auth folder feature with all necessary files
```

### Component

If you want to create a component other modules depend on, this sub-generator
will create the files needed for you.

Within the component sub-generator, the following default files are generated for you.
Replace #{CommonComponentName} with your own module name.

```bash
.
└── src
    └── common
        └── components
             └── CommonComponentName
                 ├── CommonComponentName.js
                 ├── CommonComponentName.scss
                 └── package.json
```

#### Arguments

| Arguments      | Description        | Type   | Required |
| -------------- | ------------------ | ------ | -------- |
| componentName  | Name of the module | String | true     |
| componentRoot  | Name of the module | String | true     |

#### Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `-h`, `--help`     | Print the generator's options and usage    |                |
| `--skip-cache`     | Do not remember prompt answers             | Default: false |
| `--skip-install`   | Do not automatically install dependencies  | Default: false |
| `--raw`   | Use user input raw format for component name  | Default: false |

#### Examples

The following command will generate the following:

```bash
yo react-redux-modules:component TextBox ./src/common/components --raw
# Generates the following:
.
└── src
    └── common
        └── components
             └── TextBox
                 ├── TextBox.js
                 ├── TextBox.scss
                 └── package.json
```

### Action Test

If you want to generate an action test, for a known module, this sub-generator will help.

Within the component sub-generator, the following default files are generated for you.

Replace #{module} and #{action} with your own module and action names.

```bash
.
└── test
    └── unit
        └── module
             └── actions
                 └── action.spec.js
```

#### Arguments

| Arguments      | Description        | Type   | Required |
| -------------- | ------------------ | ------ | -------- |
| module  | Name of the module | String | true     |
| action  | Name of the action | String | true     |

#### Examples

The following command will generate the following:

```bash
yo react-redux-modules:actionTests Analytics Partners

# Generates the following:
.
└── test
    └── unit
        └── Analytics
            └── actions
                └── Partners.spec.js
```

