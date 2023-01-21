import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResults';

type MatchDate = [
  Date, string, string, number, number, MatchResults, string
]
interface DateReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: Array<MatchDate> = [];
  constructor(public reader: DateReader) { }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: Array<string>): MatchDate => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6]
        ]
      })
  }
  //18 video

}