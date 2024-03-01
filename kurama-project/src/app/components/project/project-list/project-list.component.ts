import {Component, inject, Input} from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {NgForOf} from "@angular/common";
import {ProjectDetailsComponent} from "../project-details/project-details.component";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    NgForOf,
    ProjectDetailsComponent
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
    projectService: ProjectService = inject(ProjectService);
    projectList: Project[] = [];

    constructor(private authService: AuthService
    ) {
      console.log(authService.isAuthed())
      this.projectList = this.projectService.getAllProjects();
    }
}
