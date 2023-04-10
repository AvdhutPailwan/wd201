/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    [
      {
        title: "Read book",
        completed: false,
        dueDate: new Date().toISOString().split("T")[0],
      },
      {
        title: "Complete assignment",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
          .toISOString()
          .split("T")[0],
      },
      {
        title: "Prepare for exams",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
          .toISOString()
          .split("T")[0],
      },
    ].forEach(add);
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrive the items with today's due date", () => {
    expect(dueToday().length).toBe(2);
  });

  test("Should retrive the items with overdue due date", () => {
    expect(overdue().length).toBe(1);
  });

  test("Should retrive the items with due date having a later date", () => {
    expect(dueLater().length).toBe(1);
  });
});
