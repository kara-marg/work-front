import {Component, inject, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../entity/project";
import {TicketService} from "../../../services/ticket.service";
import {Requirement} from "../../../entity/requirement";
import {TcListComponent} from "../../test-cases/tc-list/tc-list.component";
import {TcService} from "../../../services/tc.service";
import {TestCase} from "../../../entity/testCase";
import {DatePipe, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "../../project/project-item/project-item.component";
import {RequirementService} from "../../../services/requirement.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-ticket-page',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    RouterLink,
    TcListComponent,
    NgForOf,
    ProjectItemComponent,
    DatePipe,
    MatIcon
  ],
  templateUrl: './requirement-page.component.html',
  styleUrl: './requirement-page.component.scss'
})
export class RequirementPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  requirementService: RequirementService = inject(RequirementService);
  requirement?: Requirement;
  requirementId?: number;




  constructor() {
    this.requirementId = Number(this.route.snapshot.params['id']);
    this.getRequirementById();

  }

  getRequirementById(){
    if (this.requirementId){
      this.requirementService.getRequirementById(this.requirementId).subscribe(
        data =>{
          this.requirement = data;
        }
      )
    }
  }
}
