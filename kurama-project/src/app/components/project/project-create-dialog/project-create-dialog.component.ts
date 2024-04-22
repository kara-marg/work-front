import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {ProjectComponent} from "../../../entity/projectComponent";
import {Project} from "../../../entity/project";

@Component({
  selector: 'app-project-create-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './project-create-dialog.component.html',
  styleUrl: './project-create-dialog.component.scss'
})
export class ProjectCreateDialogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  projects: Project[] = [];
  loading: boolean = true


  createProjectForm = new FormGroup({
    projectNameInput: new FormControl('', Validators.required),
    projectDescriptionInput: new FormControl('', Validators.required),
  })
  constructor(private dialogRef: MatDialogRef<ProjectCreateDialogComponent>) {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.projects = data
        this.loading = false;
      }
    );
  }

  save(){
      let project: Project = {
        description: this.createProjectForm.controls.projectDescriptionInput.value,
        name: this.createProjectForm.controls.projectNameInput.value,

      }
      this.projectService.saveProject(project).subscribe(data => {
        console.log(data);
        this.dialogRef.close();
      })

    }




}
