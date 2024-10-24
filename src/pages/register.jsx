import React from "react";
import Input from "../components/inputField";

const Register = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Sucessfully");
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    e.target.reset();
  };
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-[50px] text-center text-bold">Register </h1>
      <form className="w-[400px] m-2 space-y-4" onSubmit={onSubmit}>
        <div className="text-start">
          <label htmlFor="name" className="">
            Name
          </label>
          <Input type="text" name="name" id="name" className="w-full " />
        </div>
        <div className="text-start">
          <label htmlFor="name" className="">
          Mobile Number
          </label>
          <Input type="text" name="number" id="number" className="w-full " />
        </div>
        <div className="text-start">
          <label htmlFor="email" className="">
            Email
          </label>
          <Input type="email" name="email" id="email" className="w-full " />
        </div>
        <div className="text-start">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            className="w-full"
          />
        </div>
        <div className="text-start">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            type="password"
            id="confirmPassword"
            name="ConfirmPassword"
            className="w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[green] text-white py-2 w-1/2 rounded-full my-4 "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
