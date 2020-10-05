const fs = require('fs');
const chalk = require('chalk');

const { AVAILABLE_ACTIONS } = require('./constants');

const checkIsFileAvailable = (path, mode) => {
  try {
    fs.accessSync(path, mode);
    return true;
  } catch (error) {
    return false;
  }
}

const validate = (programOptions) => {
  const { action, shift, input, output } = programOptions;

  let error = false;

  // Validate -a, --action
  if (!action) {
    console.error(chalk.red('"action" is required option!'));
    error = true;
  }

  const availableActionValues = Object.values(AVAILABLE_ACTIONS);
  const isCorrectAction = availableActionValues.some((availableAction) => availableAction === action);
  if (!isCorrectAction) {
    console.error(chalk.red(`"action" must be "${availableActionValues.join('", "')}"!`));
    error = true;
  }

  // Validate -s, --shift
  if (!shift) {
    console.error(chalk.red('"shift" is required option!'));
    error = true;
  }

  const isInteger = Number.isInteger(+shift);
  if (!isInteger) {
    console.error(chalk.red('"shift" must be integer'));
    error = true;
  }

  // Validate -i, --input
  if (input && !checkIsFileAvailable(input, fs.constants.R_OK)) {
    console.error(chalk.red('"input" file could not be read.'));
    error = true;
  }

  // Validate -o, --output
  if (output && !checkIsFileAvailable(output, fs.constants.W_OK)) {
    console.error(chalk.red('"output" file could not be write.'));
    error = true;
  }

  return error;
}

module.exports = {
  validate,
}
