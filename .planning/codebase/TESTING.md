# Testing Patterns

**Analysis Date:** 2026-03-18

## Test Framework

**Runner:**
- [Node.js built-in test runner](https://nodejs.org/api/test.html) (`node:test`).
- No separate configuration file detected.

**Assertion Library:**
- [Node.js built-in assert module](https://nodejs.org/api/assert.html) (`node:assert`).

**Run Commands:**
- A `package.json` with a test script was not found. Tests are likely run directly via the node executable.
```bash
# Example command to run all tests
node --test ./**/*.test.cjs
```

## Test File Organization

**Location:**
- Tests for tooling scripts are co-located with the code, often in a `test/` subdirectory relative to the script. For example, tests for `bin/gsd-tools.cjs` are found in `bin/test/`.

**Naming:**
- Test files follow the `[name].test.cjs` convention.

**Structure:**
```
.opencode/get-shit-done/bin/
├── gsd-tools.cjs
└── test/
    ├── allow-read-config.test.cjs
    └── get-profile.test.cjs
```

## Test Structure

**Suite Organization:**
- Test suites are created with `describe`.
- Setup and teardown logic is handled with `beforeEach` and `afterEach`.
- Individual test cases are defined with `test`.

```javascript
// Pattern from: ./.opencode/get-shit-done/bin/gsd-tools.test.cjs
const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

describe('history-digest command', () => {
  let tmpDir;

  beforeEach(() => {
    tmpDir = createTempProject();
  });

  afterEach(() => {
    cleanup(tmpDir);
  });

  test('empty phases directory returns valid schema', () => {
    const result = runGsdTools('history-digest', tmpDir);
    assert.ok(result.success, `Command failed: ${result.error}`);

    const digest = JSON.parse(result.output);
    assert.deepStrictEqual(digest.phases, {}, 'phases should be empty object');
  });
});
```

## Mocking

**Framework:**
- No mocking framework (like Jest mocks, Sinon, or Testdouble) was detected.

**Patterns:**
- Tests are primarily integration tests that interact with the actual file system and execute the tool as a child process. State is managed by creating and destroying temporary directories for each test run.

**What to Mock:**
- Not applicable.

**What NOT to Mock:**
- The file system and child processes are not mocked, forming the basis of the integration tests.

## Fixtures and Factories

**Test Data:**
- Test data (e.g., temporary project structures, markdown files) is created programmatically within helper functions inside the test files.

```javascript
// Pattern from: ./.opencode/get-shit-done/bin/gsd-tools.test.cjs
function createTempProject() {
  const tmpDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'gsd-test-'));
  fs.mkdirSync(path.join(tmpDir, '.planning', 'phases'), { recursive: true });
  return tmpDir;
}
```

**Location:**
- Helper functions for test data generation are located within the test file itself.

## Coverage

**Requirements:**
- No test coverage configuration or enforcement was detected.

**View Coverage:**
- No command for viewing coverage was detected.

## Test Types

**Unit Tests:**
- Not observed. The focus is on higher-level testing.

**Integration Tests:**
- This is the primary type of testing found. The tests validate command-line tools by executing them and inspecting their output and file system side effects.

**E2E Tests:**
- Not used.

## Common Patterns

**Async Testing:**
- Async operations are handled via `execSync`, which blocks execution, so async/await patterns are not needed in the test assertions themselves.

**Error Testing:**
- Errors are tested by asserting that a command execution fails and inspecting the captured `stderr` output.

```javascript
// From a helper function in gsd-tools.test.cjs
function runGsdTools(args, cwd = process.cwd()) {
  try {
    // ... success case
  } catch (err) {
    return {
      success: false,
      output: err.stdout?.toString().trim() || '',
      error: err.stderr?.toString().trim() || err.message,
    };
  }
}
```

---

*Testing analysis: 2026-03-18*
