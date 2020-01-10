import { action, observable, computed } from 'mobx';

/**
 * A todo task is an object with this structure:
 *
 * {
 *   task: 'Sweep the floor',
 *   done: false
 * }
 */

export default class TodoListStore {
  @observable todos = [];

  /**
   * Computed properties are values that MobX derives lazily. This means that the value of todoStore.completedTodos
   * isn't derived until you refer to it in your code. It's automatically re-computed whenever the value of `todos`
   * changes. The value is memoized (cached) so that repeated calls to `completedTodos` don't re-run the filter operation
   * unless it's necessary.
   */
  @computed get completedTodos() {
    return this.todos.filter(({ done }) => done);
  }

  @computed get pendingTodos() {
    return this.todos.filter(({ done }) => !done);
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addTodo = (task) => {
    this.todos.push({ task, done: false });
  };

  @action toggleTodo = (idx) => {
    this.todos[idx].done = !this.todos[idx].done;
  };

  @action deleteTodo = (idx) => {
    this.todos.splice(idx, 1);
  };
}
