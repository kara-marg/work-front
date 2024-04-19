import {TestCase} from "./testCase";
export interface Requirement {
  id: number;
  name: string;
  description: string;
  projectComponentId: number,
  testCases?: TestCase[];
  date?: Date,

}
