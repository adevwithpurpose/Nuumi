# Coding Conventions

**Analysis Date:** 2026-03-18

## Naming Patterns

**Files:**
- Based on the tooling scripts, files use kebab-case (e.g., `gsd-tools.cjs`).
- Test files use the pattern `[name].test.cjs`.

**Functions:**
- Functions use camelCase (e.g., `runGsdTools`, `createTempProject`).

**Variables:**
- Variables use camelCase (e.g., `tmpDir`, `result`).
- Constants for imported modules or paths are in UPPER_CASE (e.g., `TOOLS_PATH`).

**Types:**
- Not applicable. The codebase consists of JavaScript (`.cjs`) files, not TypeScript.

## Code Style

**Formatting:**
- Formatting is managed by Prettier via `.prettierrc.json`.
- Key settings:
  - `printWidth`: 120
  - `singleQuote`: true

**Linting:**
- A specific linter configuration (e.g., `.eslintrc.js`) was not detected in the project root.

## Import Organization

**Order:**
- Modules are imported using `require()`.
- The observed pattern is to import built-in Node.js modules first.
```javascript
const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
```

**Path Aliases:**
- Path aliases are not used. Standard relative paths (`__dirname`) are used for local module imports.

## Error Handling

**Patterns:**
- Errors from synchronous child processes are handled using `try...catch` blocks. The error's `stdout` and `stderr` are captured for reporting.

```javascript
// From: ./.opencode/get-shit-done/bin/gsd-tools.test.cjs
function runGsdTools(args, cwd = process.cwd()) {
  try {
    const result = execSync(`node "${TOOLS_PATH}" ${args}`, {
      cwd,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return { success: true, output: result.trim() };
  } catch (err) {
    return {
      success: false,
      output: err.stdout?.toString().trim() || '',
      error: err.stderr?.toString().trim() || err.message,
    };
  }
}
```

## Logging

**Framework:**
- `console` is used for output. No external logging framework was detected.

**Patterns:**
- Logging is not a primary concern in the observed files.

## Comments

**When to Comment:**
- Comments are used for file-level descriptions and to describe helper functions.
- Large blocks of code (e.g., test suites) are separated by a long comment line for readability.
```javascript
// ─────────────────────────────────────────────────────────────────────────────
// phases list command
// ─────────────────────────────────────────────────────────────────────────────
```

**JSDoc/TSDoc:**
- JSDoc is used for file-level comments.
```javascript
/**
 * GSD Tools Tests
 */
```

## Function Design

**Size:**
- Functions are generally small and focused on a single responsibility (e.g., `createTempProject`, `cleanup`).

**Parameters:**
- Functions take specific arguments. Default values are used where applicable (e.g., `cwd = process.cwd()`).

**Return Values:**
- Functions return objects with clear properties, often indicating success or failure (e.g., `{ success: true, output: result.trim() }`).

## Module Design

**Exports:**
- Not applicable. The analyzed files are scripts and tests, not reusable modules that export functionality.

**Barrel Files:**
- Not used.

---

*Convention analysis: 2026-03-18*
