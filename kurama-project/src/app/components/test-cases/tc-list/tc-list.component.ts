import {Component, inject, Input, NgModule} from '@angular/core';
import {TcService} from "../../../services/tc.service";
import {TestCase} from "../../../entity/testCase";
import {TcDetailsComponent} from "../tc-details/tc-details.component";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {TicketService} from "../../../services/ticket.service";
import {Requirement} from "../../../entity/requirement";
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
 // testCasesService: TcService = inject(TcService);
 //testCase?: Testcase;
  displayedColumns: string[] = ['name', 'status', 'actions'];
  @Input() inputTestCaseList?: TestCase[] = [];
  ticketService: TicketService = inject(TicketService);
  ticket?: Requirement

  constructor() {
    const ticketId = Number(this.route.snapshot.params['id']);
    this.ticket = this.ticketService.getTicketById(ticketId)
    console.log(this.ticket)
  }
}
