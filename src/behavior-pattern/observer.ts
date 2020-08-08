export interface Subject {
  attatch(o: Observer): void;
  detatch(o: Observer): void;
  notify(): void;
}

export interface Observer {
  update(message: string): void;
}

export class ConcreteSubject implements Subject {
  private observers: Array<Observer> = new Array<Observer>();
  private _message: string = '';

  set message(value: string) {
    this._message = value;
  }

  get message() {
    return this._message;
  }

  attatch(o: Observer): void {
    this.observers.push(o);
  }

  detatch(o: Observer): void {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notify(): void {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this._message);
    }
  }
}

export class ConcreteObserver implements Observer {
  message: string = '';

  update(message: string): void {
    this.message = message;
  }

  show(): string {
    return this.message;
  }
}
