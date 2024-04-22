import {Component, inject, Input} from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectItemComponent} from "../project-item/project-item.component";
import {AuthService} from "../../../services/domain/auth.service";
import {ProjectComponent} from "../../../entity/projectComponent";
import {HeaderService} from "../../../services/domain/header.service";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProjectCreateDialogComponent} from "../project-create-dialog/project-create-dialog.component";
import {
  ProjectComponentCreateDialogComponent
} from "../../project-component/project-component-create-dialog/project-component-create-dialog.component";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    NgForOf,
    ProjectItemComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
    projectService: ProjectService = inject(ProjectService);
    projectList: Project[] = [];
    loading: Boolean = true;

    constructor(private headerService: HeaderService,public dialog: MatDialog) {
      headerService.setNetItemConfig("project")

      this.projectService.getAllProjects().subscribe(
        data => {
          this.projectList = data;
          console.log(data)
          this.loading = false;
        }
      );
    }


  openProjectCreateDialog() {
    const dialogRef = this.dialog.open(ProjectCreateDialogComponent, {
      width: '50%',
    });
}
}
