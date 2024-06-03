import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {TcService} from "../../../services/tc.service";
import {Requirement} from "../../../entity/requirement";
import {TestCase} from "../../../entity/testCase";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {TcListComponent} from "../tc-list/tc-list.component";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from "@angular/material/table";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatDialog} from "@angular/material/dialog";
import {
  RequirementSelectDialogComponent
} from "../../requirement/requirement-select-dialog/requirement-select-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-tc-page',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardHeader,
        MatCardContent,
        TcListComponent,
        MatTable,
        NgIf,
        MatColumnDef,
        MatCell,
        MatCellDef,
        MatHeaderCell,
        MatHeaderCellDef,
        DatePipe,
        RouterLink,
        MatIcon,
        MatMiniFabButton,
        MatTooltip,
        NgForOf,
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './tc-page.component.html',
  styleUrl: './tc-page.component.scss'
})
export class TcPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  testCaseService: TcService = inject(TcService)
  testCase?: TestCase;
  constructor(public dialog: MatDialog) {
    const testCaseId = Number(this.route.snapshot.params['id']);
    this.testCaseService.getTestCasesById(testCaseId).subscribe(
      data =>{ this.testCase = data;
      console.log(data)}
    )
  }
}
