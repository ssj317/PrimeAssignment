import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    createdBy: req.user._id
  });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const filter =
    req.user.role === "admin" ? {} : { createdBy: req.user._id };
  const tasks = await Task.find(filter);
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};

export const adminDeleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted by admin" });
};
