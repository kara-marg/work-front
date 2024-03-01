import {Component, inject, Input, NgModule} from '@angular/core';
import {TestCasesService} from "../../../services/test-cases.service";
import {TestCase} from "../../../entity/testCase";
import {TcDetailsComponent} from "../tc-details/tc-details.component";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {TicketService} from "../../../services/ticket.service";
import {Ticket} from "../../../entity/ticket";
import {ActivatedRoute} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";

// @ts-ignore
@Component({
  selector: 'app-tc-list',
  standalone: true,
  imports: [
    TcDetailsComponent,
    NgForOf,
    NgIf,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatRow,
    MatRowDef,
    MatTable
  ],
  templateUrl: './tc-list.component.html',
  styleUrl: './tc-list.component.scss'
})
export class TcListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
 // testCasesService: TestCasesService = inject(TestCasesService);
 //testCase?: Testcase;
  displayedColumns: string[] = ['name', 'status', 'actions'];
  @Input() inputTestCaseList?: TestCase[] = [];
  ticketService: TicketService = inject(TicketService);
  ticket?: Ticket

  constructor() {
    const ticketId = Number(this.route.snapshot.params['id']);
    this.ticket = this.ticketService.getTicketById(ticketId)
    console.log(this.ticket)
  }
}
