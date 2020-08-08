export class Originator {
  private _state!: State;

  constructor(state: State) {
      this._state = state;
  }

  createMemento(): Memento {
    return new Memento(this._state);
  }

  setMemento(memento: Memento) {
    this._state = memento.state;
  }

  get state() {
    return this._state;
  }

  set state(state: State) {
    this._state = state;
  }
}

export class Memento {
  private _state: State;
  constructor(state: State) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  set state(state: State) {
    this._state = state;
  }
}

export class State {
  private _status: string;

  constructor(status: string) {
    this._status = status;
  }

  get status() {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }
}

export class CareTaker {
  private _memento!: Memento;

  get memento(): Memento {
    return this._memento;
  }

  set memento(memento: Memento) {
    this._memento = memento;
  }
}
