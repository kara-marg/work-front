import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectComponentService} from "../../../services/project-component.service";
import {ProjectComponent} from "../../../entity/projectComponent";

@Component({
  selector: 'app-project-component-page',
  standalone: true,
  imports: [],
  templateUrl: './project-component-page.component.html',
  styleUrl: './project-component-page.component.scss'
})
export class ProjectComponentPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectComponentService: ProjectComponentService = inject(ProjectComponentService);
  projectComponent?: ProjectComponent;
  projectComponentId?: number;

  constructor() {
    this.projectComponentId = Number(this.route.snapshot.params['id']);
    this.getProjectComponentById();
  }

  getProjectComponentById() {
    if (this.projectComponentId) {
      this.projectComponentService.getProjectComponentById(this.projectComponentId).subscribe(
        data => {
          this.projectComponent = data;
        }
      )
    }
  }
}
