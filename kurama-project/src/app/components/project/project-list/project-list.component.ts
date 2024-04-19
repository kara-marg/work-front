import {Component, inject, Input} from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectItemComponent} from "../project-item/project-item.component";
import {AuthService} from "../../../services/domain/auth.service";
import {ProjectComponent} from "../../../entity/projectComponent";
import {HeaderService} from "../../../services/domain/header.service";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    NgForOf,
    ProjectItemComponent,
    NgIf
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
    projectService: ProjectService = inject(ProjectService);
    projectList: Project[] = [];
    loading: Boolean = true;

    constructor(private headerService: HeaderService) {
      headerService.setNetItemConfig("project")

      this.projectService.getAllProjects().subscribe(
        data => {
          this.projectList = data;
          console.log(data)
          this.loading = false;
        }
      );
    }
}
