import {Component, Inject, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {RequirementService} from "../../../services/requirement.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import {Requirement} from "../../../entity/requirement";
import {MatButton} from "@angular/material/button";
import {TestCase} from "../../../entity/testCase";

@Component({
  selector: 'app-requirement-select-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatCheckbox,
    NgForOf,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    NgIf
  ],
  templateUrl: './requirement-select-dialog.component.html',
  styleUrl: './requirement-select-dialog.component.scss'
})
export class RequirementSelectDialogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  requirementService: RequirementService = inject(RequirementService);
  requirements: Requirement[] = [];
  formGroupConfig:{[index: number]:any} = {};

  loading: boolean = true

  selectCoveredRequirementsGroup: FormGroup = new FormGroup({});
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<RequirementSelectDialogComponent>,
              private formBuilder: FormBuilder) {
    this.requirementService.getAllRequirementsByProjectId(data.projectId).subscribe(
      data => {
        this.requirements = data;
        for (const requirement of this.requirements) {
          if (requirement.id) {
            this.formGroupConfig[requirement.id] = new FormControl(this.isRequirementAlreadySelected(requirement.id, this.data.testCase));
          }
        }
        this.selectCoveredRequirementsGroup = this.formBuilder.group(this.formGroupConfig);
        this.loading = false;
      })
  }

  isRequirementAlreadySelected(requirementId: number, testCase: TestCase): boolean {
    if (!testCase.requirementShortDTOList) {
      return  false;
    }
    for (const requirement of testCase.requirementShortDTOList) {
      if (requirement.id == requirementId) {
        return true;
      }
    }
    return false;
  }

  save(){
    const resultList: Requirement[] = [];
    Object.keys(this.formGroupConfig).forEach(requirementId => {
      const control = this.selectCoveredRequirementsGroup.get(requirementId);
      if (control?.value) {

        const requirement = this.requirements.find(item => item.id == +requirementId);
        if (requirement) {
          resultList.push(requirement);
        }
      }
    });
    console.log(resultList)
    this.dialogRef.close({'isSave': true, 'resultList': resultList});
  }

  close(){
    this.dialogRef.close({'isSave': false});
  }
}
