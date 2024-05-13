import {Injectable} from "@angular/core";
import {TicketService} from "./ticket.service";
import {TestCase} from "../entity/testCase";
import {Requirement} from "../entity/requirement";
import {RequestService} from "./domain/request.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TcService {


  constructor(private requestService: RequestService) {
  }
  getTestCasesById(id: number): Observable<TestCase> {
    return this.requestService.getRequest(`/test-case/${id}`);
  }


}
