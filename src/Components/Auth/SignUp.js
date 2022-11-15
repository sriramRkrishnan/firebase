import React, { useState } from "react";
import { app } from "../../configFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    await e.preventDefault();
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("success", createUser.user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>SignUp</h3>
      <form>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
