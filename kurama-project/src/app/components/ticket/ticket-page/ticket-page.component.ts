import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {TicketService} from "../../../services/ticket.service";
import {Ticket} from "../../../entity/ticket";
import {TcListComponent} from "../../test-cases/tc-list/tc-list.component";
import {TestCasesService} from "../../../services/test-cases.service";
import {TestCase} from "../../../entity/testCase";
import {DatePipe, NgForOf} from "@angular/common";
import {ProjectDetailsComponent} from "../../project/project-details/project-details.component";

@Component({
  selector: 'app-ticket-page',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    RouterLink,
    TcListComponent,
    NgForOf,
    ProjectDetailsComponent,
    DatePipe
  ],
  templateUrl: './ticket-page.component.html',
  styleUrl: './ticket-page.component.scss'
})
export class TicketPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  ticketService: TicketService = inject(TicketService);
  ticket?: Ticket;

  constructor() {
    const ticketId = Number(this.route.snapshot.params['id']);
    this.ticket = this.ticketService.getTicketById(ticketId)

  }
}
