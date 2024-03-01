import {Injectable} from "@angular/core";
import {TicketService} from "./ticket.service";
import {TestCase} from "../entity/testCase";

@Injectable({
  providedIn: 'root'
})
export class TestCasesService{
  testCasesList: TestCase[] = [
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
    },    {
      id: 1,
      name: 'Test case 2',
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
}
