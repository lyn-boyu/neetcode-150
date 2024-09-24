# NeetCode 150 📝

Welcome to the **NeetCode 150** repository! This repository contains solutions and test cases for the NeetCode 150 problems, organized into multiple categories for structured learning. Each problem follows a Test-Driven Development (TDD) approach to help you build strong problem-solving skills in coding.

## 🚀 Features
- **⚡ Quick Feedback:** Instantly modify code and get feedback with Bun’s powerful runtime without waiting for long submission results.
- **🆓 Free Debugging:** Easily debug your solutions for free using the Bun extension in VSCode.
- **📚 Structured Learning:** Focus on problem-solving with 150 handpicked problems, divided into 22 categories, covering various problem types.

## 🗂️ Directory Structure

The repository is organized into the following problem categories:

```
01-arrays-hashing               07-trees                        13-1d-danamic-programing
02-two-pointers                 08-heap-priority-queue          14-2d-danamic-programing
03-sliding-window               09-backtracking                 15-greedy
04-stack                        10-tries                        16-intervals
05-binary-search                11-graphs                       17-math-and-geometry
06-linked-list                  12-advanced-graphs              18-bit-manipulation
```

Each category contains multiple problems, and every problem follows this file structure:

```
problem-name/
│
├── index.ts        # Solution file
└── index.test.ts   # Test cases for the problem
```

Example:

```
contains-duplicate/
│
├── index.ts        # Solution file
└── index.test.ts   # Test cases
```

## 🛠️ Usage Instructions

### 1. Bun Introduction

[Bun](https://bun.sh/) is a modern JavaScript runtime like Node or Deno. It offers a fast and all-in-one solution for running, testing, and bundling JavaScript & TypeScript projects.

### 2. Installing Bun

To install Bun, run the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

### 3. Installing the Bun VSCode Extension

1. Open VSCode.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar or press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac).
3. Search for "Bun for Visual Studio Code" and install the extension by Oven.

### 4. Running Tests

To run the tests and get instant feedback, use the following command:

```bash
bun run dev
```

This will watch for changes and automatically run your tests as you work.

### 5. Debugging with Bun

You can easily debug your code using the Bun extension in VSCode:

1. Set a breakpoint in `index.ts` by adding `debugger;`.
2. Switch to `index.test.ts`.
3. Open the command palette using `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and select **Bun: Debug**.

### 6. Branching 🌿

- **problems:** Contains templates with empty solution functions and test cases.
- **solutions:** Contains working solutions that pass all test cases.

To start practicing, clone the repository or fork it, then create a new branch from the `problems` branch:

```bash
git checkout -b my-practice-branch
```

Make sure to commit your changes as you progress through the problems to track your learning journey.

---

Happy coding! 😄