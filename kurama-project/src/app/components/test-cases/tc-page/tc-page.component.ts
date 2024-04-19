import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TcService} from "../../../services/tc.service";
import {Requirement} from "../../../entity/requirement";
import {TestCase} from "../../../entity/testCase";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {TcListComponent} from "../tc-list/tc-list.component";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from "@angular/material/table";
import {DatePipe, NgIf} from "@angular/common";

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
    DatePipe
  ],
  templateUrl: './tc-page.component.html',
  styleUrl: './tc-page.component.scss'
})
export class TcPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  testCaseService: TcService = inject(TcService)
  testCase?: TestCase;
  displayedColumns: string[] = ['name', 'status', 'actions'];
  constructor() {
    const testCaseId = Number(this.route.snapshot.params['id']);
    this.testCase = this.testCaseService.getTestCasesById(testCaseId)

  }
}
