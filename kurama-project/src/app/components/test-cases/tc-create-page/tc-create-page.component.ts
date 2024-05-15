import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {ProjectComponentService} from "../../../services/project-component.service";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {FormControl, ReactiveFormsModule, UntypedFormGroup, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {Project} from "../../../entity/project";
import {ProjectComponent} from "../../../entity/projectComponent";
import {Requirement} from "../../../entity/requirement";
import {
  RequirementSelectDialogComponent
} from "../../requirement/requirement-select-dialog/requirement-select-dialog.component";
import {MatDialog, MatDialogClose} from "@angular/material/dialog";
import {TestCase} from "../../../entity/testCase";
import {Step} from "../../../entity/step";
import {TcService} from "../../../services/tc.service";

@Component({
  selector: 'app-tc-create-page',
  standalone: true,
  imports: [
    MatLabel,
    MatCard,
    MatCardHeader,
    MatIcon,
    RouterLink,
    MatCardContent,
    MatMiniFabButton,
    MatTooltip,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    NgForOf,
    MatButton,
    MatDialogClose,
    MatIconButton
  ],
  templateUrl: './tc-create-page.component.html',
  styleUrl: './tc-create-page.component.scss'
})
export class TcCreatePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  projectComponentService: ProjectComponentService = inject(ProjectComponentService);
  tcService: TcService = inject(TcService);
  projects: Project[] = [];
  projectComponents: ProjectComponent[] = [];
  requirements: Requirement[] = [];

  stepActionControls: { [index: string]: any } = {}
  stepExpectedResultControls: { [index: string]: any } = {}
  stepNumber: number = 0;

  testCase: TestCase = {
    name: null,
    description: null,
    projectName: null,
    projectComponentName: null,
    requirementShortDTOList: [],
    steps: []
  }
  loading: boolean = true;

  createTCForm = new UntypedFormGroup({
    testCaseNameInput: new FormControl('', Validators.required),
    testCaseDescriptionInput: new FormControl('', Validators.required),
    testCaseProjectIdSelect: new FormControl('', Validators.required),
    testCaseProjectComponentIdSelect: new FormControl({ value: '', disabled: this.projectComponents?.length > 0 }, Validators.required)
  })

  constructor(public dialog: MatDialog, private router: Router) {
    this.addStep()
    this.projectService.getAllProjects().subscribe(
      data => {
        this.projects = data;
        this.loading = false;
      }
    )

    this.createTCForm.get('testCaseProjectIdSelect')?.valueChanges.subscribe(value => {
      this.getProjectComponents(value);
    });
  }

  getProjectComponents(projectId: number){
    const projectComponentControl = this.createTCForm.get('testCaseProjectComponentIdSelect');
    projectComponentControl?.setValue('')
    if (projectId) {
      projectComponentControl?.enable();
      this.projectComponentService.getAllComponentsByProjectId(projectId).subscribe(
        data => this.projectComponents = data);
    } else {
      projectComponentControl?.disable();
      this.projectComponents = [];
    }

  }

  addStep() {
    this.stepNumber = this.stepNumber + 1;
    const position = this.stepNumber;
    const actionFormControl = new FormControl('', Validators.required);
    const expectedResultFormControl = new FormControl('', Validators.required);
    this.createTCForm.addControl(`${position}_Action`, actionFormControl)
    this.createTCForm.addControl(`${position}_ER`, expectedResultFormControl)
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
    this.createTCForm.removeControl(`${this.stepNumber}_Action`)
    this.createTCForm.removeControl(`${this.stepNumber}_ER`)
    this.stepActionControls[`${this.stepNumber}_Action`] = undefined
    this.stepExpectedResultControls[`${this.stepNumber}_ER`] = undefined
    this.stepNumber = this.stepNumber - 1;
  }

  openRequirementSelectDialog() {
    const dialogRef = this.dialog.open(RequirementSelectDialogComponent, {
      width: '50%',
      data: {testCase: this.testCase, projectId: this.createTCForm.controls["testCaseProjectIdSelect"].value}
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
        this.testCase.requirementShortDTOList = requirementShortList;
      }
    });

  }

  save(){
    this.testCase.name = this.createTCForm.controls["testCaseNameInput"].value;
    this.testCase.description = this.createTCForm.controls["testCaseDescriptionInput"].value;
    this.testCase.projectId = this.createTCForm.controls["testCaseProjectIdSelect"].value;
    this.testCase.projectComponentId = this.createTCForm.controls["testCaseProjectComponentIdSelect"].value;

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

