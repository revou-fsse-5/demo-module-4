import React, { useState } from "react";

function Event() {
  // ini adalah state form dengan tipe data object
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  // apakah dengna buat 3 state masuk dengan konsep DRY
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // kenapa alasan tidak dry? Kan beda dikit kodingannya?
  // kalau bikin 3 state terpisah artinya kita akan buat handlechange sebanyak 3 kali

  // handlechange reusable function untuk semua isi state form
  const handleChange = (event: any) => {
    // const { name, value } = event.target;
    console.log(event);
    setForm((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    // alert(name);
    event.preventDefault();
    console.log("tes");
  };

  return (
    <div>
      <h1>Event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Nama
          <input
            type="text"
            name="name"
            id="IDName"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="">
          email{" "}
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="">
          password{" "}
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      {/* <button
        onClick={() => alert("Tes click")}
        onMouseLeave={() => alert("mouse leave")}
        className=" px-4 py-2 text-sm mx-2 font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Click
      </button> */}
    </div>
  );
}

export default Event;
