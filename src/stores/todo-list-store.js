import { action, observable, computed } from 'mobx';
import nanoid from 'nanoid';

/**
 * A todo task is an object with this structure:
 *
 * {
 *   id: 'a1234', // set automatically by the store
 *   task: 'Sweep the floor',
 *   done: false
 * }
 */

export default class TodoListStore {
  @observable todosById = new Map();

  constructor(rootStore) {
    this.rootStore = rootStore;
    console.log(this);
  }

  /**
   * Computed properties are values that MobX derives lazily. This means that the value of todoStore.completedTodos
   * isn't derived until you refer to it in your code. It's automatically re-computed whenever the value of `todos`
   * changes. The value is memoized (cached) so that repeated calls to `completedTodos` don't re-run the filter operation
   * unless it's necessary.
   */
  @computed get todos() {
    return [...this.todosById.values()];
  }

  @computed get completedTodos() {
    return this.todos.filter(({ done }) => done);
  }

  @computed get pendingTodos() {
    return this.todos.filter(({ done }) => !done);
  }

  @action addTodo = (task) => {
    const id = nanoid();
    this.todosById.set(id, { id, task, done: false });
  };

  @action toggleTodo = (id) => {
    const todo = this.todosById.get(id);
    todo.done = !todo.done;
    this.todosById.set(id, todo);
  };

  @action deleteTodo = (id) => {
    this.todosById.delete(id);
  };
}
