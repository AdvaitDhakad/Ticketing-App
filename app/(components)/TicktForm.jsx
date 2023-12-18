"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const TicktForm = () => {
  const router = useRouter();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify(data),
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Falied to create ticket");
    }
    router.refresh();
    router.push("/");
  };

  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((prevState) => ({
      ...prevState,
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
          onChange={handlechange}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          required={true}
          value={data.description}
          rows={5}
          onChange={handlechange}
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={handlechange}
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
              onChange={handlechange}
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
              onChange={handlechange}
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
              onChange={handlechange}
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
          onChange={handlechange}
        />
        <label>Status</label>
        <select
          id="status"
          name="status"
          value={data.status}
          onChange={handlechange}
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
