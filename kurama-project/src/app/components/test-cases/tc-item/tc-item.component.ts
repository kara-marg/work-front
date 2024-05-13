import {Component, Input} from '@angular/core';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";
import {TestCase} from "../../../entity/testCase";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-tc-item',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    RouterLink,
    MatIcon,
    MatTooltip
  ],
  templateUrl: './tc-item.component.html',
  styleUrl: './tc-item.component.scss'
})
export class TcItemComponent {
  @Input() testCase?: TestCase;
}
