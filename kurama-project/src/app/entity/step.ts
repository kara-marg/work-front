export class Step{
  id: number|null;
  stepNumber: number;
  action: string
  expectedResult: string

  constructor(
    id: number|null,
    stepNumber: number,
    action: string,
    expectedResult: string
  ) {
    this.id = id;
    this.stepNumber = stepNumber;
    this.action = action;
    this.expectedResult = expectedResult;
  }

}
