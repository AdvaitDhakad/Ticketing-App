"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";

export const TicktForm = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (res.ok) {
        const ticket = await res.json();
        router.push(`/tickets/${ticket.id}`);
      }
    });
  };
  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const startingdata = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Issue",
  };
  const [data, setData] = useState(startingdata);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={HandleSubmit}
      >
        <h3>Create your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          required={true}
          value={data.title}
          onChange={(e) => handlechange({ ...data, title: e.target.value })}
        />
        <label>Description</label>
        <input
          id="description"
          name="description"
          type="text"
          required={true}
          value={data.description}
          onChange={(e) => handlechange({ ...data, title: e.target.value })}
        />
        <label>Title</label>
        <textarea
          id="title"
          name="title"
          type="text"
          required={true}
          value={data.title}
          rows={5}
          onChange={(e) => handlechange({ ...data, title: e.target.value })}
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={(e) => handlechange({ ...data, category: e.target.value })}
        >
          <option value="Hardware Issue">Hardware Issue</option>
          <option value="Software Issue">Software Issue</option>
          <option value="Network Issue">Network Issue</option>
          <option value="Other">Other</option>
        </select>
        <label>Priority</label>
        <div className="flex items-center justify-around">
          <div>
            <input
              id="priority-high"
              name="priority"
              type="radio"
              required={true}
              value={1}
              checked={data.priority == 1}
              onChange={(e) =>
                handlechange({ ...data, priority: e.target.value })
              }
            />
            <label>1</label>
          </div>
          <div>
            <input
              id="priority-medium"
              name="priority"
              type="radio"
              required={true}
              value={2}
              checked={data.priority == 2}
              onChange={(e) =>
                handlechange({ ...data, priority: e.target.value })
              }
            />
            <label>2</label>
          </div>
          <div>
            <input
              id="priority-low"
              name="priority"
              type="radio"
              required={true}
              value={3}
              checked={data.priority == 3}
              onChange={(e) =>
                handlechange({ ...data, priority: e.target.value })
              }
            />
            <label>3</label>
          </div>
        </div>
        <lablel>Progess</lablel>
        <input
          id="progress"
          name="progress"
          type="range"
          value={data.progress}
          min={0}
          max={100}
          step={1}
          onChange={(e) => handlechange({ ...data, progress: e.target.value })}
        />
        <label>Status</label>
        <select
          id="status"
          name="status"
          value={data.status}
          onChange={(e) => handlechange({ ...data, status: e.target.value })}
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};
