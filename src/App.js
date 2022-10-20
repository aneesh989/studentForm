import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    gender: "",
  });
  let name, value;
  // function for inputs
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  let newarr = [];
  // function for checkbox
  const check = (e) => {
    if (e.target.checked === true && newarr.indexOf(e.target.value) === -1) {
      newarr.push(e.target.value);
    } else if (
      e.target.checked === false &&
      newarr.indexOf(e.target.value) > -1
    ) {
      newarr.pop(e.target.value);
    }

    user.skills = newarr;
  };
  // function for radio
  const radio = (e) => {
    let radioValue = e.target.value;
    user.gender = radioValue;
    console.log(user.gender);
  };

  // function for sumbition
  const handleSubmit = (e) => {
    let newUsers = users.concat(user);
    if (
      user.name === "" ||
      user.email === "" ||
      user.website === "" ||
      user.imagelink === "" ||
      user.skills === "" ||
      user.gender === ""
    ) {
      document.getElementById("error").innerHTML = "please fill all fields";
    } else {
      setUsers(newUsers);
    }
    if (user.email !== /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;

    e.preventDefault();
  };
  // function for clear
  const Clear = () => {
    setUser({
      name: "",
      email: "",
      website: "",
      imagelink: "",
      gender: "",
      skills: "",
    });
  };
  // validation for email
  function ValidateEmail(mail) {}

  return (
    <div className="App">
      <div className="bg-green-400  my-4">
        <h1 className="text-3xl  text-white font-bold text-center p-1  ">
          Student Enorollment form
        </h1>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2">
        <div className="">
          <span className="text-red-700 font-bold" id="error"></span>
          <div className="grid grid-cols-2 mx-2">
            <label className=" text-gray-700  font-bold my-2">Name</label>
            <input
              className="shadow appearance-none border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter Name"
            />
            <label className=" text-gray-700  font-bold my-2">Email</label>
            <input
              className="shadow appearance-none border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter Email"
            />
            <label className=" text-gray-700  font-bold my-2 ">website</label>
            <input
              className="shadow appearance-none border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2 "
              type="text"
              name="website"
              value={user.website}
              onChange={handleInputs}
              placeholder="Enter website"
            />
            <label className=" text-gray-700  font-bold my-2">image link</label>
            <input
              className="shadow appearance-none border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              type="text"
              name="imagelink"
              value={user.imagelink}
              onChange={handleInputs}
              placeholder="Enter image link"
            />
            <label className=" text-gray-700  font-bold my-2 ">Gender</label>
            <div className="my-2 flex space-x-3">
              <input type="radio" value="male" name="Gender" onChange={radio} />
              Male
              <input
                type="radio"
                value="female"
                name="Gender"
                onChange={radio}
              />
              Female
            </div>
            <label className=" text-gray-700  font-bold my-2 ">Skills</label>
            <div className="my-2 flex space-x-3">
              <input
                type="checkbox"
                name="skills"
                value="java"
                onChange={check}
              />
              java
              <input
                type="checkbox"
                id="skill"
                name="skills"
                value="HTML"
                onChange={check}
              />
              HTML
              <input
                type="checkbox"
                id="skill"
                name="skills"
                value="CSS"
                onChange={check}
              />
              CSS
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-2 rounded"
            >
              Enroll Student
            </button>
            <button
              onClick={Clear}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-2 rounded"
            >
              Clear
            </button>
          </div>
        </div>

        <div className=" ">
          <span className="flex justify-start  border-l-4 border-green-400 h-52 absolute"></span>
          <h1 className="font-bold text-center ">Enrolled Student</h1>
          <div className="flex justify-center box-border border-2 border-black border-solid font-bold mx-8 mt-2">
            <h1 className="bg-gray-400 w-3/5 mb-0 box-border border-2 border-solid pl-2">
              Description
            </h1>
            <h1 className="bg-gray-400 w-2/5 mb-0  pl-2 ">Image</h1>
          </div>

          {users.map((user, i) => {
            return (
              <div
                key={i}
                className="border-4 box-border border-black mx-8 h-32 flex items-center justify-between border-t-0 relative"
              >
                <div className="p-1 box-border h-full w-3/5 border-r-2 ">
                  <h1>{user.name}</h1>
                  <h1>{user.gender}</h1>
                  <h1>{user.email}</h1>
                  <a className="text-blue-600 underline" href={user.website}>
                    {user.website}
                  </a>
                  <h1> {user.skills && user.skills.join(", ")}</h1>
                </div>
                <div className="imageContainer flex justify-center items-center p-2 box-border w-2/5 h-full ">
                  <img src={user.imagelink} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
