import {TestCase} from "./testCase";

export interface Requirement {
  id?: number;
  name: string | null;
  description: string | null;
  projectComponentId?: number,
  projectId?: number,
  projectComponentName?: string,
  projectName?: string,
  testCases?: TestCase[];
  date?: Date,


}
