import { action, observable } from 'mobx';

export default class CounterStore {
  @observable count = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  increment() {
    this.setCount(this.count + 1);
  };

  decrement() {
    this.setCount(this.count - 1);
  }

  @action setCount = (num) => {
    this.count = num;
  };
}
