import {TestCase} from "./testCase";
export interface Ticket {
  id: number;
  name: string;
  description: string;
  type: string,
  assignee: string,
  report: string,
  priority: string;
  status: string,
  component: string,
  testCasesList?: TestCase[];
  date?: Date,
}
