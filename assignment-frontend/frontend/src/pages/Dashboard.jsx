import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask
} from "../api/task.js";
import Navbar from "../components/Navbar.jsx";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  Box
} from "@mui/material";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    await createTask({ title });
    setTitle("");
    loadTasks();
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditingTitle(task.title);
  };

  const saveEdit = async (id) => {
    if (!editingTitle.trim()) return;
    await updateTask(id, { title: editingTitle });
    setEditingId(null);
    setEditingTitle("");
    loadTasks();
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Header */}
        <Typography variant="h4" gutterBottom>
          My Tasks
        </Typography>

        {/* Create Task */}
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Enter new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="contained" onClick={addTask}>
            Add
          </Button>
        </Stack>

        {/* Tasks */}
        {tasks.length === 0 ? (
          <Typography color="text.secondary">
            No tasks yet. Add one above 👆
          </Typography>
        ) : (
          <Stack spacing={2}>
            {tasks.map((task) => (
              <Card key={task._id} variant="outlined">
                <CardContent>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems="center"
                  >
                    {/* Task Title */}
                    <Box sx={{ flexGrow: 1, width: "100%" }}>
                      {editingId === task._id ? (
                        <TextField
                          fullWidth
                          value={editingTitle}
                          onChange={(e) =>
                            setEditingTitle(e.target.value)
                          }
                        />
                      ) : (
                        <Typography>{task.title}</Typography>
                      )}
                    </Box>

                    {/* Actions */}
                    <Stack direction="row" spacing={1}>
                      {editingId === task._id ? (
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => saveEdit(task._id)}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => startEdit(task)}
                        >
                          Edit
                        </Button>
                      )}

                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        onClick={() =>
                          deleteTask(task._id).then(loadTasks)
                        }
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
