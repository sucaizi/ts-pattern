export abstract class Template {
  public templateMethod(): void {
    this.dosomething1();
    this.dosomethins2();
  }

  abstract dosomething1(): void;
  abstract dosomethins2(): void;
}

export class ConcreteClass extends Template {
  message: string = '';

  dosomething1(): void {
    this.message += 'step1;';
  }

  dosomethins2(): void {
    this.message += 'step2;';
  }
}
