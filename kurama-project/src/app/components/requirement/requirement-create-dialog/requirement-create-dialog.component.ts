import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {ProjectComponentService} from "../../../services/project-component.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project} from "../../../entity/project";
import {ProjectComponent} from "../../../entity/projectComponent";
import {Requirement} from "../../../entity/requirement";
import {RequirementService} from "../../../services/requirement.service";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-requirement-create-dialog',
  standalone: true,
  imports: [MatDialogModule,
    MatLabel,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    NgForOf,
    MatButton,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './requirement-create-dialog.component.html',
  styleUrl: './requirement-create-dialog.component.scss'
})
export class RequirementCreateDialogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  projectComponentService: ProjectComponentService = inject(ProjectComponentService);
  requirementService: RequirementService = inject(RequirementService);
  projects: Project[] = [];
  projectComponents: ProjectComponent[] = [];
  loading: boolean = true

  createRequirementForm = new FormGroup({
    requirementNameInput: new FormControl('',Validators.required),
    requirementDescriptionInput: new FormControl('',Validators.required),
    requirementProjectSelect: new FormControl('',Validators.required),
    requirementProjectComponentSelect: new FormControl('',Validators.required),
  })

  constructor(private dialogRef: MatDialogRef<RequirementCreateDialogComponent>) {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.projects = data;
        this.loading = false;
      }
    )
    this.projectComponentService.getAllComponents().subscribe(
      data =>{
        this.projectComponents = data;
        this.loading = false;

      }
    )
  }


  save(){
    if (this.createRequirementForm.controls.requirementProjectSelect.value && this.createRequirementForm.controls.requirementProjectComponentSelect.value){
      let requirement: Requirement = {
        description: this.createRequirementForm.controls.requirementDescriptionInput.value,
        name:this.createRequirementForm.controls.requirementNameInput.value,
        projectId: +this.createRequirementForm.controls.requirementProjectSelect.value,
        projectComponentId: +this.createRequirementForm.controls.requirementProjectComponentSelect.value,
      }
      this.requirementService.saveRequirement(requirement).subscribe(data =>{
        console.log(data);
        this.dialogRef.close();
      })
    }
  }
}
