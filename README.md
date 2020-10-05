# caesr-cipher-cli

Caesar cipher CLI tool.
It can encode and decode text data using Caesar's cipher.
The app transform only latin letters, other characters remain unchanged.

## How to install

1. Download or clone this repository
2. Go to the app folder (`caesar-cipher-cli`)
3. Use the command `npm i` or `yarn` to install the dependencies

## How to use

Go to source files folder and write the command `node caesar-cipher [options]`, where the `options` are:
* `-a, --action`: action - encode/decode (required)
* `-s, --shift`: cipher shift (required, integer)
* `-i, --input`: input file (default: `stdin`)
* `-o, --output`: output file (default: `stdout`)

### Usage examples:

```bash
$ node caesar-cipher --action encode --shift 11 --input input.txt --output output.txt

$ node caesar-cipher -a encode -s 11 -i input.txt -o output.txt

$ node caesar-cipher -a encode --shift 21 -o "./output.txt"

$ node caesar-cipher -a decode -s 21
```
