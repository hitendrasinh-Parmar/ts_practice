import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';


// 123 video

const csvFileReader = new CsvFileReader(' football.csv');
const matchReader = new MatchReader(csvFileReader);



// reader.read();

// console.log(reader.data[0]);

let manUniWin = 0;

// const printMatchResults = () => {
//   // if()
// }

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUniWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwatWin) {
    manUniWin++;
  }
}

console.log('m', manUniWin)