/* eslint-disable no-undef */

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
const dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const over = [];
    all.forEach((element) => {
      if (element.dueDate === yesterday) {
        over.push(element);
      }
    });
    return over.reverse();
    // Write the date check condition here and return the array
    // of overdue items accordingly.
  };

  const dueToday = () => {
    const todayDue = [];
    all.forEach((element) => {
      if (element.dueDate === today) {
        todayDue.push(element);
      }
    });
    return todayDue.reverse();
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
  };

  const dueLater = () => {
    const laterDue = [];
    all.forEach((element) => {
      if (element.dueDate === tomorrow) {
        laterDue.push(element);
      }
    });
    return laterDue.reverse();
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  };

  const toDisplayableList = (list) => {
    const output = [];
    list.forEach((element, index) => {
      if (element.dueDate === yesterday) {
        if (element.completed === true) {
          output.push("[x]" + " " + element.title + " " + element.dueDate);
        } else {
          output.push("[ ]" + " " + element.title + " " + element.dueDate);
        }
      } else if (element.dueDate === today) {
        delete element.dueDate;
        if (element.completed === true) {
          output.push("[x]" + " " + element.title);
        } else {
          output.push("[ ]" + " " + element.title);
        }
      } else if (element.dueDate === tomorrow) {
        if (element.completed === true) {
          output.push("[x]" + " " + element.title + " " + element.dueDate);
        } else {
          output.push("[ ]" + " " + element.title + " " + element.dueDate);
        }
      }
    });
    return output.reverse().join("\n");
    // Format the To-Do list here, and return the output string
    // as per the format given above.
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
