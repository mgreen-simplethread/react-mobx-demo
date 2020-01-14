import { observable, action, computed } from 'mobx';
import IpAddressStore from './ip-address-store';
import CounterStore from './counter-store';
import TodoListStore from './todo-list-store';

export default class RootStore {
  // Observable properties:
  @observable networkStatus = 'idle';
  @observable networkError;

  constructor() {
    // Child store instances:
    this.ipAddress = new IpAddressStore(this);
    this.counter = new CounterStore(this);
    this.todoList = new TodoListStore(this);

    console.log('Initialize RootStore: %O', this);
  }

  @computed get isLoading() {
    return this.networkStatus === 'loading';
  }

  /**
   * Action methods are used to modify observable properties rather than setting them directly.
   * The @action decorator allows multiple observable properties to be modified in a single function call
   * without triggering multiple UI updates. If we edited observables one by one, each change would trigger
   * an update.
   *
   * Here it doesn't really matter because we're only setting one at a time, but it's still a best
   * practice to use actions.
   */
  @action setNetworkStatus = (val) => {
    this.networkStatus = val;
  };

  @action setNetworkError = (err) => {
    this.networkError = err;
  };

  @action clearNetworkError = () => {
    this.networkError = null;
  };
}
