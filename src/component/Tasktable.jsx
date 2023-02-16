import React, { useState } from "react";
import { Table, Input, Tag, Modal, DatePicker } from "antd";
import moment from "moment";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
function Tasktable({ todoList, setData }) {
  const data = todoList;
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingtask, setEditingtask] = useState(null);
 

  const columns = [
    {
      title: "created",
      dataIndex: "created",
      key: "created",
      sorter: (a, b) => moment(a.created).unix() - moment(b.created).unix(),
      defaultSortOrder: "descend",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (title, record) =>
        editingId === record.id ? (
          <Input
            value={title}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((d) =>
                  d.id === record.id ? { ...d, title: e.target.value } : d
                )
              )
            }
            maxLength={100}
          />
        ) : (
          title
        ),
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (description, record) =>
        editingId === record.id ? (
          <Input.TextArea
            value={data.description}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((d) =>
                  d.id === record.id ? { ...d, description: e.target.value } : d
                )
              )
            }
            maxLength={1000}
          />
        ) : (
          description
        ),
    },
    {
      title: "dueDate",
      dataIndex: "dueDate",
      key: "dueDate",
      sorter: (a, b) =>
        a.dueDate ? moment(a.dueDate).unix() - moment(b.dueDate).unix() : -1,
      render: (dueDate, record) =>
        editingId === record.id ? (
          <Input
            value={dueDate ? moment(dueDate).format("ll") : ""}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((d) =>
                  d.id === record.id
                    ? { ...d, dueDate: moment(e.target.value).toISOString() }
                    : d
                )
              )
            }
          />
        ) : dueDate ? (
          moment(dueDate).format("ll")
        ) : null,
    },
    {
      title: "tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags, record) =>
        editingId === record.id ? (
          <Input
            value={tags.join(",")}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((d) =>
                  d.id === record.id
                    ? { ...d, tags: e.target.value.split(",") }
                    : d
                )
              )
            }
          />
        ) : (
          tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
        ),
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "OPEN", value: "OPEN" },
        { text: "WORKING", value: "WORKING" },
        { text: "DONE", value: "DONE" },
        { text: "OVERDUE", value: "OVERDUE" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status, record) =>
        editingId === record.id ? (
          <Input
            value={status}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((d) =>
                  d.id === record.id ? { ...d, status: e.target.value } : d
                )
              )
            }
          />
        ) : (
          status
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditTask(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteTask(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const onDeleteTask = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Task from ToDo List?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setData((pre) => {
          return pre.filter((d) => d.id !== record.id);
        });
      },
    });
  };
  const onEditTask = (record) => {
    setIsEditing(true);
    setEditingtask({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingtask(null);
  };
  return (
    <div className="pg">
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "50"],
        }}
        style={{ width: "80%", margin: "10px" }}
      ></Table>
      <Modal
        title="Edit TODO"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setData((pre) => {
            return pre.map((dt) => {
              if (dt.id === editingtask.id) {
                return editingtask;
              } else {
                return dt;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input className="modal-inpt"
          value={editingtask?.title}
          onChange={(e) => {
            setEditingtask((pre) => {
              return { ...pre, title: e.target.value };
            });
          }}
        />
        <Input className="modal-inpt"
          value={editingtask?.description}
          onChange={(e) => {
            setEditingtask((pre) => {
              return { ...pre, description: e.target.value };
            });
          }}
        />
        <DatePicker className="modal-inpt"
          selected={editingtask?.dueDate}
          onChange={(selected) => {
            setEditingtask((prevTask) => {
              return {
                ...prevTask,
                dueDate: selected ? selected.toISOString() : null,
              };
            });
          }}
        />
        <Input className="modal-inpt"
          value={editingtask?.tags.join(",")}
          onChange={(e) => {
            setEditingtask((prevTask) => {
              const tags = e.target.value.split(",").map((tag) => tag.trim());
              return { ...prevTask, tags };
            });
          }}
        />
        <Input className="modal-inpt"
          value={editingtask?.status}
          onChange={(e) => {
            setEditingtask((pre) => {
              return { ...pre, status: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
}

export default Tasktable;
