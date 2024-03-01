import {Component, inject, input, Input, ViewChild} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {TicketsDetailsComponent} from "../tickets-details/tickets-details.component";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {Ticket} from "../../../entity/ticket";
import {ActivatedRoute} from "@angular/router";

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
    TicketsDetailsComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss'
})
export class TicketsListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  project?: Project
  showTestCases: boolean = true;

  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);

    this.project = this.projectService.getProjectById(projectId)
  }

  changeVisibilityOfTC(){
    this.showTestCases = !this.showTestCases;
  }
}
