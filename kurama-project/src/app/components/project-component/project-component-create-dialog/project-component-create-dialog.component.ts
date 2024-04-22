import {Component, Inject, inject} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectComponentService} from "../../../services/project-component.service";
import {ProjectComponent} from "../../../entity/projectComponent";

@Component({
  selector: 'app-project-component-create-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormField, MatInput, ReactiveFormsModule, MatLabel, MatSelect, MatOption, NgIf, NgForOf, FormsModule],
  templateUrl: './project-component-create-dialog.component.html',
  styleUrl: './project-component-create-dialog.component.scss',
})

export class ProjectComponentCreateDialogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  projectComponentService: ProjectComponentService = inject(ProjectComponentService);
  projects: Project[] = [];
  loading: boolean = true

  createComponentForm = new FormGroup({
    componentNameInput: new FormControl('', Validators.required),
    componentDescriptionInput: new FormControl('', Validators.required),
    componentProjectSelect: new FormControl('', Validators.required)
  })

  constructor(private dialogRef: MatDialogRef<ProjectComponentCreateDialogComponent>) {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.projects = data
        this.loading = false;
      }
    );
  }


  save(){
    if (this.createComponentForm.controls.componentProjectSelect.value) {
      let component: ProjectComponent = {
        description: this.createComponentForm.controls.componentDescriptionInput.value,
        finished: false,
        name: this.createComponentForm.controls.componentNameInput.value,
        projectId: +this.createComponentForm.controls.componentProjectSelect.value

      }
      this.projectComponentService.saveComponent(component).subscribe(data => {
        console.log(data);
        this.dialogRef.close();
      })

    }

  }


}

