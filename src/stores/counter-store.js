import { action, observable } from 'mobx';

export default class CounterStore {
  @observable count = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // These 2 functions don't need to be decorated as actions because all they do is call out to a different action that's already decorated:
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
