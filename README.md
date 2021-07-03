# NodeJS CLI Boilerplate

## Setup

### Install [degit](https://github.com/Rich-Harris/degit)

```bash
pnpm add --global degit
```

### Clone repo with [degit](https://github.com/Rich-Harris/degit)

```bash
# clone in current directory
degit newfox79/cli-boilerplate

# clone in my-cli
degit newfox79/cli-boilerplate my-cli
```

### Install dependencies

```bash
pnpm i
```

## Features

- Eslint with prettier
- Uses [pnpm](https://pnpm.io/) as default package manager
- Uses [zx](https://www.npmjs.com/package/zx)
- Hot reload with nodemon

## Included packages

- [boxen](https://www.npmjs.com/package/boxen) - Create boxes in the terminal
- [commander](https://www.npmjs.com/package/commander) - The complete solution for node.js command-line interfaces. [Cheatsheet](https://tj.github.io/commander.js/).
- [kleur](https://www.npmjs.com/package/kleur) - The fastest Node.js library for formatting terminal text with ANSI colors~!
- [listr](https://www.npmjs.com/package/listr) - Terminal task list
- [ora](https://www.npmjs.com/package/ora) - Elegant terminal spinner
- [prompts](https://www.npmjs.com/package/prompts) - Lightweight, beautiful and user-friendly interactive prompts
- [zx](https://www.npmjs.com/package/zx) - Amazing wrapper of child_process
