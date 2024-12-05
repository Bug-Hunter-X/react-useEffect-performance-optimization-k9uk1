# React 19 useEffect Performance Issue

This repository demonstrates a common performance issue in React applications involving the `useEffect` hook.  The original code includes a `useEffect` that runs after every render, leading to unnecessary re-renders and performance degradation.  The solution shows how to correctly use the dependency array to optimize the effect's execution.

## Problem

In the `bug.js` file, the `useEffect` hook lacks a dependency array, causing it to run after every state update. This is inefficient if the effect doesn't depend on any state values.

## Solution

The `bugSolution.js` file demonstrates the correct usage of `useEffect`. An empty dependency array `[]` ensures that the effect runs only once after the initial render.