import {Component, Input} from '@angular/core';
import {Project} from "../../../entity/project";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton, MatFabButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatCardContent,
    MatButton,
    MatFabButton,
    RouterLink
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  @Input() project?: Project;
}
