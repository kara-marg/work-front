import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatCell, MatCellDef, MatColumnDef} from "@angular/material/table";
import {Ticket} from "../../../entity/ticket";
import {TcListComponent} from "../../test-cases/tc-list/tc-list.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tickets-details',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    RouterLink,
    MatColumnDef,
    MatCell,
    MatCellDef,
    TcListComponent,
    NgIf
  ],
  templateUrl: './tickets-details.component.html',
  styleUrl: './tickets-details.component.scss'
})
export class TicketsDetailsComponent {
  @Input() ticket?: Ticket;

  @Input() showTestCases?: boolean;


}
