# Node/Typescript Crash Course

This is the code written while following a tutorial for using Node (Express) with Typescript. Thank you to [Adnan Rahić](https://blog.sourcerer.io/@adnanrahic) for provding the [tutorial](https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1).

## Run the server

To run the server with Typescript:

```bash
ts-node ./lib/server.ts
```

To run the server with Javascript, first build the distribution code, then run the server:

```bash
tsc
node ./dist/server.js
```

The server will then be available to use at `http://localhost:4040`