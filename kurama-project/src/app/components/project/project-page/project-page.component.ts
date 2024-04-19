import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatProgressBar} from "@angular/material/progress-bar";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatTree,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodePadding, MatTreeNodeToggle
} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {ProjectComponent} from "../../../entity/projectComponent";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {ProjectComponentItem} from "../../project-component/project-component-item/project-component-item.component";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatProgressBar,
    MatRow,
    MatRowDef,
    MatTable,
    NgIf,
    RouterLink,
    MatHeaderCellDef,
    MatTree,
    MatTreeNode,
    NgForOf,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatIconButton,
    MatTreeNodeToggle,
    ProjectComponentItem,
    MatButton,
    MatCardActions,
    MatMiniFabButton,
    MatTooltip
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService: ProjectService = inject(ProjectService);
  project?: Project;
  displayedColumns: string[] = ["name", "finished", "coverage"];

  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.projectService.getProjectById(projectId).subscribe(
      data => {
        console.log(data)
        this.project = data;
      }
    )
  }
}
