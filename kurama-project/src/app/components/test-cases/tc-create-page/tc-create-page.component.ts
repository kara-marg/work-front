import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {ProjectComponentService} from "../../../services/project-component.service";
import {RequirementService} from "../../../services/requirement.service";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
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
import {RequirementShort} from "../../../entity/requirement-short";

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
        MatDialogClose
    ],
  templateUrl: './tc-create-page.component.html',
  styleUrl: './tc-create-page.component.scss'
})
export class TcCreatePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  projectComponentService: ProjectComponentService = inject(ProjectComponentService);
  requirementService: RequirementService = inject(RequirementService);
  projects: Project[] = [];
  projectComponents: ProjectComponent[] = [];
  requirements: Requirement[] = [];

  stepActionControls:{[index: string]: any} = {}
  stepExpectedResultControls:{[index: string]: any} = {}
  stepNumber:number = 0;

  testCase: TestCase = {
    name: null,
    description: null,
    projectName: null,
    projectComponentName: null,
    requirementShortDTOList: [],
    steps: []
  }
  loading: boolean = true;

  createTCForm= new UntypedFormGroup({
    testCaseNameInput: new FormControl('', Validators.required),
    testCaseDescriptionInput: new FormControl('', Validators.required),
    testCaseProjectIdSelect: new FormControl('', Validators.required),
    testCaseProjectComponentIdSelect: new FormControl('', Validators.required),
  })

  constructor(public dialog: MatDialog) {
    this.addStep()
    this.projectService.getAllProjects().subscribe(
      data => {
        this.projects = data;
        this.loading = false;
      }
    )
    this.projectComponentService.getAllComponents().subscribe(
      data => {
        this.projectComponents = data;
        this.loading = false;
      }
    )
  }

  addStep(){
    this.stepNumber = this.stepNumber + 1;
    const position = this.stepNumber;
    const actionFormControl = new FormControl('', Validators.required);
    const expectedResultFormControl = new FormControl('', Validators.required);
    this.createTCForm.addControl(`${position}_Action`, actionFormControl)
    this.createTCForm.addControl(`${position}_ER`, expectedResultFormControl)
    this.stepActionControls['${position}_Action'] = actionFormControl;
    this.stepExpectedResultControls['${position}_ER'] = expectedResultFormControl;
  }

  deleteStep(step: number) {
    let i: number;
    for (i = step; i<=this.stepNumber; i++){

    }
  }

  openRequirementSelectDialog() {
    const dialogRef = this.dialog.open(RequirementSelectDialogComponent, {
      width: '50%',
      data: {testCase: this.testCase}
    });
  }
}

