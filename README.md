# Node.js Server Port Already in Use

This repository demonstrates a common issue in Node.js development: attempting to start a server on a port that is already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` offers a robust solution.

## Problem

The original code attempts to start an HTTP server on port 8080. If another process is already using this port (e.g., another instance of the server or a different application), the server will fail to start, and you might not get a clear error message. 

## Solution

The improved code in `bugSolution.js` checks if the port is available before attempting to start the server.  It uses a simple mechanism to test for availability.  More sophisticated methods may be needed for production environments.