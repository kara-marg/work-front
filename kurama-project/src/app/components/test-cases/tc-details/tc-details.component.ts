import {Component, Input} from '@angular/core';
import {TestCase} from "../../../entity/testCase";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Requirement} from "../../../entity/requirement";

@Component({
  selector: 'app-tc-details',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatColumnDef,
    MatHeaderRowDef,
    MatHeaderRow,
    NgIf,
    MatIcon,
    MatFormField,
    MatInput,

  ],
  templateUrl: './tc-details.component.html',
  styleUrl: './tc-details.component.scss'
})


export class TcDetailsComponent {
  displayedColumns: string[] = ['name', 'status', 'actions'];
  @Input() inputTestCaseList?: TestCase[] = [];

}
