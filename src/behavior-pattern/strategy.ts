export interface Strategy {
  algorithemInterface(): void;
}

export class ConcreteStrategy1 implements Strategy {
  algorithemInterface(): void {
    console.log('ConcreteStrategy1 execute');
  }
}

export class ConcreteStrategy2 implements Strategy {
  algorithemInterface(): void {
    console.log('ConcreteStrategy2 execute');
  }
}

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  contextInterface(): string {
    this.strategy.algorithemInterface();
    return this.strategy.constructor.name + ' exec algorithem';
  }
}
