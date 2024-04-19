import {Component, inject, input, Input, ViewChild} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RequirementItemComponent} from "../requirement-item/requirement-item.component";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {Requirement} from "../../../entity/requirement";
import {ActivatedRoute} from "@angular/router";
import {HeaderService} from "../../../services/domain/header.service";

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [
    MatCardActions,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatButton,
    NgOptimizedImage,
    RequirementItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './requirement-list.component.html',
  styleUrl: './requirement-list.component.scss'
})
export class RequirementListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  project?: Project
  showTestCases: boolean = true;

  constructor(private headerService: HeaderService) {
    console.log(headerService)
    const projectId = Number(this.route.snapshot.params['id']);

    // this.project = this.projectService.getProjectById(projectId)
  }

  changeVisibilityOfTC(){
    this.showTestCases = !this.showTestCases;
  }
}
