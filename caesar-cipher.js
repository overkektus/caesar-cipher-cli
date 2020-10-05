const fs = require('fs');
const { pipeline } = require('stream');
const { program } = require('commander');
const chalk = require('chalk');

const { validate } = require('./src/validator');
const { createTransformStream } = require('./src/transform');

program
  .storeOptionsAsProperties(false)
  .option('-a --action <type>', 'An action encode/decode')
  .option('-s --shift <number>', 'A shift')
  .option('-i --input <path>', 'An input file')
  .option('-o --output <path>', 'An output file')
  .parse(process.argv);

const programOptions = program.opts();

const isInvalidOptions = validate(programOptions);

if (isInvalidOptions) {
  process.exit(1);
}

const { action, input, output, shift } = programOptions;

const inputStream = input ? fs.createReadStream(input, 'utf8') : process.stdin;
const transformStream = createTransformStream(action, shift);
const outputStream = output ? fs.createWriteStream(output, { flags: 'a', encoding: 'utf8' }) : process.stdout;

pipeline(
  inputStream,
  transformStream,
  outputStream,
  (error) => {
    if (error) {
      console.error(chalk.red(error));
      process.exit(1);
    }
    console.log('finished');
  }
);
