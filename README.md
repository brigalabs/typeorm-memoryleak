# Memory leak on createConnection

This repository is to demo a memory leak related to https://github.com/typeorm/typeorm/issues/6164 . When using jest with typeorm connection, I experience the issue.

To reproduce:

```sh
yarn test
```

Make sure you run `yarn install` first.

```
$ yarn test
yarn run v1.22.4
$ yarn node --expose-gc ./node_modules/jest/bin/jest.js --runInBand --logHeapUsage --detectLeaks src/leak.test.ts
 FAIL  src/leak.test.ts
  ● Test suite failed to run

    EXPERIMENTAL FEATURE!
    Your test suite is leaking memory. Please ensure all references are cleaned.

    There is a number of things that can leak memory:
      - Async operations that have not finished (e.g. fs.readFile).
      - Timers not properly mocked (e.g. setInterval, setTimeout).
      - Keeping references to the global scope.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:188:18)
```      
