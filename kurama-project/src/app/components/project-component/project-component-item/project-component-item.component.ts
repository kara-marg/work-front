import {Component, Input} from '@angular/core';
import {ProjectComponent} from "../../../entity/projectComponent";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatProgressBar} from "@angular/material/progress-bar";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {HeaderService} from "../../../services/domain/header.service";

@Component({
  selector: 'app-project-component-item',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
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
    MatAccordion,
    MatExpansionPanel,
    MatExpansionModule,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    NgForOf
  ],
  templateUrl: './project-component-item.component.html',
  styleUrl: './project-component-item.component.scss'
})
export class ProjectComponentItem {

  @Input() projectComponent?: ProjectComponent;
  constructor(private headerService: HeaderService) {
  }
}
