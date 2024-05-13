export class Step{
  id: number|null;
  position: number;
  action: string
  expectedResult: string

  constructor(
    id: number|null,
    position: number,
    action: string,
    expectedResult: string
  ) {
    this.id = id;
    this.position = position;
    this.action = action;
    this.expectedResult = expectedResult;
  }

}
