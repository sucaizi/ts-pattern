export abstract class Mediator {
  abstract send(message: string, colleague: Colleague): void;
}

export abstract class Colleague {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  abstract send(message: string): void;
  abstract receive(message: string): void;
}

export class ConcreteMediator extends Mediator {
  public concreateColleagueA: ConcreteColleague1 | undefined;
  public concreateColleagueB: ConcreteColleague2 | undefined;

  send(message: string, colleague: Colleague): void {
    if (this.concreateColleagueA === colleague) {
      this.concreateColleagueB?.receive(message);
    } else {
      this.concreateColleagueA?.receive(message);
    }
  }
}

export class ConcreteColleague1 extends Colleague {
  public message: string = '';
  constructor(mediator: Mediator) {
    super(mediator);
  }

  send(message: string): void {
    this.mediator.send(message, this);
  }

  receive(message: string): void {
    this.message = `colleague1 receive ${message}`;
    console.log(this.message);
  }
}

export class ConcreteColleague2 extends Colleague {
  public message: string = '';
  constructor(mediator: Mediator) {
    super(mediator);
  }

  send(message: string): void {
    this.mediator.send(message, this);
  }

  receive(message: string) {
    this.message = `colleague2 receive ${message}`;
    console.log(this.message);
  }
}
