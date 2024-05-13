import {Injectable} from '@angular/core';
import {RequestService} from "./domain/request.service";
import {Observable} from "rxjs";
import {Project} from "../entity/project";
import {Requirement} from "../entity/requirement";

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor(private requestService: RequestService) {
  }


  getAllRequirementsByProjectId(projectId: number): Observable<Requirement[]> {
    let path = `/requirement/project/${projectId}`
    return this.requestService.getRequest(path);
  }

  getRequirementById(id: number): Observable<Requirement> {
    let path = `/requirement/${id}`
    return this.requestService.getRequest(path);
  }

  saveRequirement(requirement: Requirement): Observable<Requirement> {
    return this.requestService.postRequest("/requirement/save", requirement);
  }

}

