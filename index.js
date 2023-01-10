import chalk from 'chalk';
import randomColor from 'randomcolor';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let lum = process.argv[3];
let col = process.argv[2];

let color = randomColor({
  luminosity: lum,
  hue: col,
});

function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}
if (col == 'ask') {
  col = String(prompt('What color would you like to use? '));
  console.log(`Your color is: ${col} `);
  lum = String(prompt('What luminosity would you like to use? '));
  console.log(`Your luminosity is: ${lum} `);
  color = randomColor({
    luminosity: lum,
    hue: col,
  });
  colorAndLog(`##############################
  ##############################
  ##############################
  ########              ########
  ########   ${color}    ########
  ########              ########
  ##############################
  ##############################
  ##############################`);
} else {
  colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
}
