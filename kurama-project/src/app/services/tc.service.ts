import {Injectable} from "@angular/core";
import {TicketService} from "./ticket.service";
import {TestCase} from "../entity/testCase";
import {Requirement} from "../entity/requirement";

@Injectable({
  providedIn: 'root'
})
export class TcService {
  testCasesList: TestCase[] = [

  ]

  constructor() {
  }
  getTestCasesById(id: number): TestCase | undefined {
    return this.testCasesList.find(testCase => testCase.id === id);
  }


}
