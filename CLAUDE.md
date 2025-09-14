# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `yarn build:ide` - Compiles TypeScript using tsc
- **Lint**: `yarn lint` - Runs ESLint on the entire codebase
- **Lint & Fix**: `yarn lint:fix` - Runs ESLint with auto-fix
- **Test**: `yarn test` - Runs linting (no separate test suite)
- **Format**: `yarn prettier` - Formats all code files with Prettier
- **Clean**: `yarn clean` - Removes build artifacts and cache files
- **Release**: `yarn auto shipit` - Automated release using auto

## Architecture

This is an ESLint configuration package (`@alienfast/eslint-config`) that provides a comprehensive linting setup for JavaScript/TypeScript projects.

### Core Structure

- **`src/index.js`** - Main entry point exporting configs, constants, and limits
- **`src/configs/`** - Contains specific ESLint configurations:
  - `js.js` - JavaScript/TypeScript rules and plugins
  - `json.js` - JSON file linting
  - `markdown.js` - Markdown file linting
  - `storybook.js` - Storybook-specific rules
  - `index.js` - Combines configs into recommended preset
- **`src/constants.js`** - File patterns and global ignores used across configs
- **`src/limits/`** - Configuration overrides for specific file types/contexts

### Configuration Philosophy

The package provides a "recommended" configuration that combines multiple specialized configs:

- Base JS/TS linting with comprehensive plugin ecosystem
- File-type specific rules (JSON, Markdown)
- Context-aware overrides (scripts, configs, Storybook)
- Global ignores for build artifacts

### Key Dependencies

Uses modern ESLint v9+ flat config format with plugins:

- TypeScript ESLint for TS support
- Import resolution and sorting
- React hooks linting
- Prettier integration
- Unicorn for additional JS/TS best practices

## Package Management

- Uses Yarn 4.9.4 with package manager enforcement
- ESM-only package (`"type": "module"`)
- Publishes to GitHub Packages registry
