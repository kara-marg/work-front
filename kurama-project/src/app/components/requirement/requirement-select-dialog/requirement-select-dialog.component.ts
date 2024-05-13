import {Component, Inject, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
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
  loading: boolean = true

  selectCoveredRequirementsGroup: FormGroup = new FormGroup({});
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
    this.requirementService.getAllRequirementsByProjectId(1).subscribe(
      data => {
        this.requirements = data;
        // let formGroupConfig = new Map<number, FormControl>;
        let formGroupConfig:{[index: number]:any} = {};
        for (const requirement of this.requirements) {
          if (requirement.id) {
            console.log("We are here")
            formGroupConfig[requirement.id] = new FormControl(this.isRequirementAlreadySelected(requirement.id, this.data.testCase));
          }
        }
        this.selectCoveredRequirementsGroup = this.formBuilder.group(formGroupConfig);
        this.loading = false;
        console.log(this.selectCoveredRequirementsGroup?.controls)
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
}
