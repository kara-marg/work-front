import {Injectable} from '@angular/core';
import {Project} from "../entity/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectList: Project[] = [
    {
      id: 0,
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo sit amet quam tincidunt condimentum. Curabitur malesuada semper nisi, vel tristique nisl bibendum non. Nullam eros massa, mattis id eleifend vitae, venenatis in est. Aliquam eget malesuada magna, id viverra magna. Nam sed urna tincidunt, sagittis est sed, ullamcorper metus. Aenean eget pulvinar justo, sed vehicula enim. Pellentesque ac eros eu est blandit ultricies eget at purus. Mauris gravida pellentesque erat sit amet finibus. Morbi ut tristique eros. Integer ut diam erat. Aliquam sit amet viverra erat, eget pharetra erat. Integer id tortor tincidunt, iaculis lorem id, pharetra erat. Sed venenatis enim a dignissim volutpat.',
      ticketList: [{
        id: 0,
        name: 'Ticket1',
        description: 'text text text text',
        priority: 'medium',
        type: 'text',
        assignee: 'Karina',
        report: 'Nick',
        status: 'open',
        date: new Date() ,
        component: 'component'
      },
        {
          id: 1,
          name: 'Ticket2',
          description: 'text2 text2 text2 text2',
          priority: 'low',
          type: 'text',
          assignee: 'Nick',
          report: 'Kara',
          status: 'closed',
          date: new Date() ,
          component: 'component'
        },
        {
          id: 3,
          name: 'Ticket3',
          description: 'text2 text2 text2 text2',
          priority: 'high',
          type: 'text',
          assignee: 'Kolyan',
          report: 'Kara',
          status: 'in process',
          date: new Date(),
          component: 'component'
        }]
    },
    {
      id: 1,
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed justo sit amet quam tincidunt condimentum. Curabitur malesuada semper nisi, vel tristique nisl bibendum non. Nullam eros massa, mattis id eleifend vitae, venenatis in est. Aliquam eget malesuada magna, id viverra magna. Nam sed urna tincidunt, sagittis est sed, ullamcorper metus. Aenean eget pulvinar justo, sed vehicula enim. Pellentesque ac eros eu est blandit ultricies eget at purus. Mauris gravida pellentesque erat sit amet finibus. Morbi ut tristique eros. Integer ut diam erat. Aliquam sit amet viverra erat, eget pharetra erat. Integer id tortor tincidunt, iaculis lorem id, pharetra erat. Sed venenatis enim a dignissim volutpat.',
      ticketList: [{
        id: 0,
        name: 'Ticket1',
        description: 'text text text text',
        priority: 'medium',
        type: 'text',
        assignee: 'Karina',
        report: 'Nick',
        status: 'open',
        date: new Date(),
        component: 'component'
      },
        {
          id: 1,
          name: 'Ticket2',
          description: 'text2 text2 text2 text2',
          priority: 'low',
          type: 'text',
          assignee: 'Nick',
          report: 'Kara',
          status: 'closed',
          date: new Date(),
          component: 'component'
        },
        {
          id: 3,
          name: 'Ticket3',
          description: 'text2 text2 text2 text2',
          priority: 'high',
          type: 'text',
          assignee: 'Kolyan',
          report: 'Kara',
          status: 'in process',
          date: new Date(),
          component: 'component'
        }]
    }
  ]

  constructor() {
  }
  getAllProjects(): Project[] {
    return this.projectList;
  }

  getProjectById(id: number): Project | undefined {
    return this.projectList.find(project => project.id === id);
  }
}
