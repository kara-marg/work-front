import {Injectable} from "@angular/core";
import {Ticket} from "../entity/ticket";


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketList: Ticket[] = [
    {
      id: 0,
      name: 'Ticket1',
      description: 'text text text text',
      priority: 'medium',
      type: 'text',
      assignee: 'Karina',
      report: 'Nick',
      status: 'open',
      date: new Date(),
      component: 'component',
      testCasesList: [
        {
          id: 0,
          name: 'Вхід в систему адміністратором',
          isAutomated: true,
          steps: '1. Користувач іде на сторінку автентифікації. 2. Введення \n' +
            'логіну та пароля адміністратора.',
          result: 'Результат тесту відповідає очікуваному результату',
          expectedResult: 'Успішний вхід в систему.',
          dateOfTesting: new Date(),
          component: 'string',
          environment:'Chrome (1920 x 1080)'
        },
        {
          id: 1,
          name: 'Test case 2',
          isAutomated: true,
          steps: '1. Користувач іде на сторінку автентифікації. 2. Введення \n' +
            'логіну та пароля адміністратора.',
          result: 'Результат тесту відповідає очікуваному результату',
          expectedResult: 'Успішний вхід в систему.',
          dateOfTesting: new Date(),
          component: 'string',
          environment:'Chrome (1920 x 1080)'
        },{
          id: 2,
          name: 'Test case 3',
          isAutomated: true,
          steps: '1. Користувач іде на сторінку автентифікації. 2. Введення \n' +
            'логіну та пароля адміністратора.',
          result: 'Результат тесту відповідає очікуваному результату',
          expectedResult: 'Успішний вхід в систему.',
          dateOfTesting: new Date(),
          component: 'string',
          environment:'Chrome (1920 x 1080)'
        },{
          id: 3,
          name: 'Test case 4',
          isAutomated: false,
          steps: '1. Користувач іде на сторінку автентифікації. 2. Введення \n' +
            'логіну та пароля адміністратора.',
          result: 'Результат тесту відповідає очікуваному результату',
          expectedResult: 'Успішний вхід в систему.',
          dateOfTesting: new Date(),
          component: 'string',
          environment:'Chrome (1920 x 1080)'
        }
      ]
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
      id: 2,
      name: 'Ticket3',
      description: 'text2 text2 text2 text2',
      priority: 'high',
      type: 'text',
      assignee: 'Kolyan',
      report: 'Kara',
      status: 'in process',
      date: new Date(),
      component: 'component'
    }
  ]
  constructor() {
  }
    getTicketById(id: number): Ticket | undefined {
    return this.ticketList.find(ticket => ticket.id === id);
  }


}
