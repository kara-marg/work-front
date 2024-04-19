import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatCell, MatCellDef, MatColumnDef} from "@angular/material/table";
import {Requirement} from "../../../entity/requirement";
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
  templateUrl: './requirement-item.component.html',
  styleUrl: './requirement-item.component.scss'
})
export class RequirementItemComponent {
  @Input() requirement?: Requirement;

  @Input() showTestCases?: boolean;


}
