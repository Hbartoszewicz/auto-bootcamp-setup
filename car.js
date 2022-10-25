/**
 * This is the function to determine whether should car go further or be damaged
 */
function moveCar(roadDamages) {
  let lives = 2;
  for (let i = 0; i < roadDamages.length; i++) {
    if (roadDamages[i] && lives < 2) {
      lives -= 1;
      console.log(`The car is broken`);
      break;
    } else if (roadDamages[i] && lives > 1) {
      lives -= 1;
      console.log(`The car is damaged`);
    } else {
      console.log(`The car goes to step ${i + 1}`);
    }
  }
}

/**
 * This is the function to check output for the same scenarios as used in tests
 */
function checkSetup() {
  console.log("Scenario 1");
  moveCar([false, false, false, false, false, false, false, false, false, false]);
  console.log("Scenario 2");
  moveCar([false, true, false, false, false, false, false, false, false, false]);
  console.log("Scenario 3");
  moveCar([false, false, false, false, true, false, true, false, false, false]);
}

checkSetup();

/**
 * This code line is required in order to trigger automated tests
 * Do not change this code line
 */
export default moveCar;
