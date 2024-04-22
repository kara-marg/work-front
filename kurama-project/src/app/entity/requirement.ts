import {TestCase} from "./testCase";
export interface Requirement {
  id: number;
  name: string;
  description: string;
  projectComponentId: number,
  projectId: number,
  projectComponentName: string,
  projectName:string,
  testCases?: TestCase[];
  date?: Date,


}
