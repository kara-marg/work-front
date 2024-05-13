import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProjectComponentService} from "../../../services/project-component.service";
import {ProjectComponent} from "../../../entity/projectComponent";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RequirementItemComponent} from "../../requirement/requirement-item/requirement-item.component";
import {NgForOf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {
  RequirementCreateDialogComponent
} from "../../requirement/requirement-create-dialog/requirement-create-dialog.component";

@Component({
  selector: 'app-project-component-page',
  standalone: true,
  imports: [
    MatCard,
    RouterLink,
    MatIcon,
    MatCardHeader,
    MatCardContent,
    MatMiniFabButton,
    MatTooltip,
    RequirementItemComponent,
    NgForOf
  ],
  templateUrl: './project-component-page.component.html',
  styleUrl: './project-component-page.component.scss'
})
export class ProjectComponentPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectComponentService: ProjectComponentService = inject(ProjectComponentService);
  projectComponent?: ProjectComponent;
  projectComponentId?: number;

  constructor(public dialog: MatDialog) {
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

  openRequirementDialog() {
    const dialogRef = this.dialog.open(RequirementCreateDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProjectComponentById();
    });

  }


}
