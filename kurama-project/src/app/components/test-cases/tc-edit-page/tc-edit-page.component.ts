import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TcService} from "../../../services/tc.service";
import {TestCase} from "../../../entity/testCase";
import {MatDialog} from "@angular/material/dialog";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {FormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  RequirementSelectDialogComponent
} from "../../requirement/requirement-select-dialog/requirement-select-dialog.component";
import {MatOption, MatSelect} from "@angular/material/select";
import {Step} from "../../../entity/step";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-tc-edit-page',
  standalone: true,
  imports: [
    MatCardHeader,
    RouterLink,
    MatCardContent,
    MatIcon,
    NgForOf,
    MatCard,
    MatLabel,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatSelect,
    MatOption,
    MatButton,
    MatIconButton,
    MatMiniFabButton,
    MatTooltip
  ],
  templateUrl: './tc-edit-page.component.html',
  styleUrl: './tc-edit-page.component.scss'
})
export class TcEditPageComponent {
  stepNumber: number = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  tcService: TcService = inject(TcService);
  testCase: TestCase = {
    name: null,
    description: null,
    projectName: null,
    projectComponentName: null,
    requirementShortDTOList: [],
    steps: []
  }

  stepActionControls: { [index: string]: any } = {}
  stepExpectedResultControls: { [index: string]: any } = {}


  editTcForm = new UntypedFormGroup({
    testCaseNameInput: new FormControl('', Validators.required),
    testCaseDescriptionInput: new FormControl('', Validators.required),
  })

  constructor(public dialog: MatDialog, private router: Router) {
    const testCaseId = Number(this.route.snapshot.params['id']);
    this.tcService.getTestCasesById(testCaseId).subscribe(
      data => {
        this.testCase = data;
        console.log(data)
        this.editTcForm.controls['testCaseNameInput'].setValue(data.name)
        this.editTcForm.controls['testCaseDescriptionInput'].setValue(data.description)
        this.stepNumber = this.testCase.steps.length;

        for (const step of this.testCase.steps) {
          this.configureStep(step);
        }
      }
    )
  }

  openRequirementSelectDialog() {
    const dialogRef = this.dialog.open(RequirementSelectDialogComponent, {
      width: '50%',
      data: {testCase: this.testCase, projectId: this.testCase.projectId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.isSave) {
        const requirementShortList = [];
        for (let requirement of result.resultList) {
          requirementShortList.push({
            id: requirement.id,
            name: requirement.name,
            description: requirement.description,
            projectComponentId: requirement.projectComponentId,
            projectId: requirement.projectId,
            projectComponentName: requirement.projectComponentName,
            projectName: requirement.projectName
          })
        }
        if (this.testCase) {

        }
        this.testCase.requirementShortDTOList = requirementShortList;
      }
    });
  }

  configureStep(step: Step) {
    const position = step.stepNumber;
    const actionFormControl = new FormControl(step.action, Validators.required);
    const expectedResultFormControl = new FormControl(step.expectedResult, Validators.required);
    this.editTcForm.addControl(`${position}_Action`, actionFormControl)
    this.editTcForm.addControl(`${position}_ER`, expectedResultFormControl)
    this.stepActionControls[`${position}_Action`] = actionFormControl;
    this.stepExpectedResultControls[`${position}_ER`] = expectedResultFormControl;
  }

  addStep() {
    this.stepNumber = this.stepNumber + 1;
    const position = this.stepNumber;
    const actionFormControl = new FormControl('', Validators.required);
    const expectedResultFormControl = new FormControl('', Validators.required);
    this.editTcForm.addControl(`${position}_Action`, actionFormControl)
    this.editTcForm.addControl(`${position}_ER`, expectedResultFormControl)
    this.stepActionControls[`${position}_Action`] = actionFormControl;
    this.stepExpectedResultControls[`${position}_ER`] = expectedResultFormControl;
  }

  deleteStep(step: number) {
    let i: number;
    for (i = step; i < this.stepNumber; i++) {
      const aCName = `${i}_Action`;
      const erCName = `${i}_ER`;
      const aCNextName = `${i + 1}_Action`;
      const erCNextName = `${i + 1}_ER`;

      this.stepActionControls[aCName].setValue(this.stepActionControls[aCNextName].value);
      this.stepExpectedResultControls[erCName].setValue(this.stepExpectedResultControls[erCNextName].value);
    }
    this.editTcForm.removeControl(`${this.stepNumber}_Action`)
    this.editTcForm.removeControl(`${this.stepNumber}_ER`)
    this.stepActionControls[`${this.stepNumber}_Action`] = undefined
    this.stepExpectedResultControls[`${this.stepNumber}_ER`] = undefined
    this.stepNumber = this.stepNumber - 1;
  }

  save(){
    this.testCase.name = this.editTcForm.controls["testCaseNameInput"].value;
    this.testCase.description = this.editTcForm.controls["testCaseDescriptionInput"].value;
    this.testCase.steps = [];

    for (let i = 1; i <= this.stepNumber; i++) {
      const aCName = `${i}_Action`;
      const erCName = `${i}_ER`;
      this.testCase.steps?.push(new Step(null, i, this.stepActionControls[aCName].value, this.stepExpectedResultControls[erCName].value))
    }

    this.tcService.saveTestCase(this.testCase).subscribe(
      data => {
        this.router.navigate([`/tc-page/${data.id}`])
      }
    );
  }
}
