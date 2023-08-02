const beep = () => process.stdout.write('\x07');

const alarm = () => {
  const args = process.argv.slice(2);

  for (const arg of args) {
    const time = Number(arg);
    if (isNaN(time) || time < 0) { // Input is not a number
      console.log(`Invalid time: ${arg}. Please enter a time!`);
      return;
    }
    setTimeout(() => {
      console.log(`Beep beep! Time's up!: ${arg} seconds`);
      beep();
    }, time * 1000);

  }
};

alarm();

// i need to create an alarm function clock/timer will beef after a specific amount of time
// i need to be able to use an ulimited number of alarms on command line
// process.stdout.write('\x07'); will allow the machine to perform a system sound.

/*edge cases : no numbers are provided
 an input is a negative number
 an input is not a number
*/

