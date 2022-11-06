## Requirements  
Clone this repository to your workstation.  
No other file or code modifications expected.  

## Tests
Run `yarn install` to install all dependencies.  
Run `yarn debug` to check debug command output.  
Run `yarn test` to check test command output.  
  
The concole output will show you the result.

## Debug console output example
```
yarn debug
yarn run v1.22.18
$ node car.js
Scenario 1
The car goes to step 1
The car goes to step 2
The car goes to step 3
The car goes to step 4
The car goes to step 5
The car goes to step 6
The car goes to step 7
The car goes to step 8
The car goes to step 9
The car goes to step 10
Scenario 2
The car goes to step 1
The car is damaged
The car goes to step 3
The car goes to step 4
The car goes to step 5
The car goes to step 6
The car goes to step 7
The car goes to step 8
The car goes to step 9
The car goes to step 10
Scenario 3
The car goes to step 1
The car goes to step 2
The car goes to step 3
The car goes to step 4
The car is damaged
The car goes to step 6
The car is broken
```
## Test console output example
```
yarn test 
yarn run v1.22.18
$ jest
 PASS  tests/car.spec.js
  Car drives through the road section
    ✓ car goes to the step 10, if the road is not damaged (1ms)
    ✓ the car is damaged, but goes to step 10, if 1 road step is damaged (1ms)
    ✓ the car goes forward till faces 2 damaged road steps, after that car gets broken

  console.log
    Scenario 1

      at checkSetup (car.js:33:11)

  console.log
    The car goes to step 1

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 2

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 3

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 4

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 5

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 6

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 7

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 8

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 9

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 10

      at moveCar (car.js:16:15)

  console.log
    Scenario 2

      at checkSetup (car.js:35:11)

  console.log
    The car goes to step 1

      at moveCar (car.js:16:15)

  console.log
    The car is damaged

      at moveCar (car.js:14:15)

  console.log
    The car goes to step 3

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 4

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 5

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 6

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 7

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 8

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 9

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 10

      at moveCar (car.js:16:15)

  console.log
    Scenario 3

      at checkSetup (car.js:37:11)

  console.log
    The car goes to step 1

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 2

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 3

      at moveCar (car.js:16:15)

  console.log
    The car goes to step 4

      at moveCar (car.js:16:15)

  console.log
    The car is damaged

      at moveCar (car.js:14:15)

  console.log
    The car goes to step 6

      at moveCar (car.js:16:15)

  console.log
    The car is broken

      at moveCar (car.js:10:15)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.937s
Ran all test suites.
```
