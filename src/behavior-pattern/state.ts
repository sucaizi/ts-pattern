export abstract class State {
  abstract handle(context: Context): void;
}

export class ConcreteState1 extends State {
  handle(context: Context): void {
    context.state = new ConcreteState2();
  }
}

export class ConcreteState2 extends State {
  handle(context: Context): void {
    context.state = new ConcreteState1();
  }
}

export class Context {
  private _state: State;

  constructor(state: State) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  set state(s: State) {
    this._state = s;
  }

  request(): void {
    this._state.handle(this);
  }
}
