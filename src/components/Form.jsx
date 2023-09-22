import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState("");

  const addUser = async () => {
    // e.preventDefault()
    try {
      const res = await axios.post("/api/user", form);
      console.log("AddUser:", res);
      alert("Succesfully Submitted");
      setForm({ username: "", email: "", message: "" });
    } catch (error) {
      console.log("AddUser: ERROR", error);
      setErrors(error.response.data);
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={addUser}
        className=" p-6 rounded-lg shadow-2xl bg-white w-1/3 mt-10"
      >
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
            required
            value={form.username}
            onChange={(event) =>
              setForm({ ...form, username: event.target.value })
            }
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block
            
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        
            id="exampleInput8"
            placeholder="Email address"
            required
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
            resize-none
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      maxLength={100}
            id="exampleFormControlTextarea13"
            rows="5"
            placeholder="Type Your Message Here........."
            required
            value={form.message}
            onChange={(event) =>
              setForm({ ...form, message: event.target.value })
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-large
      text-s
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
