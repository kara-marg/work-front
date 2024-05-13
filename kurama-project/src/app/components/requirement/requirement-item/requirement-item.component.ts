import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatCell, MatCellDef, MatColumnDef} from "@angular/material/table";
import {Requirement} from "../../../entity/requirement";
import {TcListComponent} from "../../test-cases/tc-list/tc-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {TcItemComponent} from "../../test-cases/tc-item/tc-item.component";

@Component({
  selector: 'app-requirement-item',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    RouterLink,
    MatColumnDef,
    MatCell,
    MatCellDef,
    TcListComponent,
    NgIf,
    MatAccordion,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatIcon,
    MatTooltip,
    MatExpansionPanelDescription,
    TcItemComponent,
    NgForOf
  ],
  templateUrl: './requirement-item.component.html',
  styleUrl: './requirement-item.component.scss'
})
export class RequirementItemComponent {
  @Input() requirement?: Requirement;

  @Input() showTestCases?: boolean;


}
