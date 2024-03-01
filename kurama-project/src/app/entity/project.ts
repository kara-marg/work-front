import {Ticket} from "./ticket";
import {TestCase} from "./testCase";

export interface Project {
  id: number;
  name: string;
  description: string;
  ticketList?: Ticket[];
  testCasesList?: TestCase[];
//  componentList: string[];
  //teamMembersList: string[];
}
