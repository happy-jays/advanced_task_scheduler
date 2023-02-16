import { useState } from "react";
import { Input, DatePicker, Select, Button } from "antd";
import moment from "moment";
import Tasktable from "./Tasktable";
const { Option } = Select;

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("OPEN");
  const [todoList, setTodoList] = useState([]);
  const handleAddTask = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newTodo = {
      id: randomNumber,
      created: moment().format(),
      title,
      description,
      dueDate,
      tags,
      status,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setDescription("");
    setDueDate("");
    setTags([]);
    setStatus("OPEN");
  };
  console.log(todoList);
  return (
    <>
      <div className="frm">
        <h1>TODO LIST</h1>
        <Input.Group className="rw">
          <Input
            disabled
            value={new Date().toLocaleString()}
            style={{ backgroundColor: "yellow", color: "black" }}
          />
        </Input.Group>
        <Input.Group className="rw">
          <Input
            value={title}
            placeholder="Enter task title"
            maxLength={100}
            required
            onChange={(e) => setTitle(e.target.value)}

          />
        </Input.Group>
        <Input.Group className="rw">
          <Input.TextArea
            value={description}
            placeholder="Enter task description"
            maxLength={1000}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Input.Group>
        <Input.Group className="rw">
          <DatePicker
            placeholder="Select due date"
            selected={dueDate ? moment(dueDate, "YYYY-MM-DD") : null}
            onChange={(date, dateString) => setDueDate(dateString)}
          />
        </Input.Group>
        <Input.Group className="rw">
          <Select
            mode="tags"
            placeholder="Enter tags"
            onChange={(values) => setTags(values)}
            style={{ width: "20%" }}
          />
        </Input.Group>
        <Input.Group className="rw">
          <Select
            style={{ width: "20%" }}
            value={status}
            onChange={(value) => setStatus(value)}
          >
            <Option value="OPEN">OPEN</Option>
            <Option value="WORKING">WORKING</Option>
            <Option value="DONE">DONE</Option>
            <Option value="OVERDUE">OVERDUE</Option>
          </Select>
        </Input.Group>
        <Input.Group className="rw" style={{ textAlign: "center" }}>
          <Button
            style={{
              width: "80%",
              backgroundColor: "greenyellow",
              color: "black",
            }}
            type="primary"
            onClick={handleAddTask}
          >
            Add
          </Button>
        </Input.Group>
      </div>
      <Tasktable todoList={todoList} setData={setTodoList} />
    </>
  );
};

export default TaskForm;
