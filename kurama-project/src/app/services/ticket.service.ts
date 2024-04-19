import {Injectable} from "@angular/core";
import {Requirement} from "../entity/requirement";
import {RequestService} from "./domain/request.service";


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketList: Requirement[] = [

  ]
  constructor(private requestService: RequestService) {
  }
    getTicketById(id: number): Requirement | undefined {
    return this.ticketList.find(ticket => ticket.id === id);
  }


}
