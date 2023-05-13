export const getTodoCategoriesByPriority = (tasks) => {
  const highPriorities = tasks.filter((task) => task.priority === "1");
  const mediumPriorities = tasks.filter((task) => task.priority === "2");
  const lowPriorities = tasks.filter((task) => task.priority === "3");

  return {
    highPriorities,
    mediumPriorities,
    lowPriorities,
  };
};
