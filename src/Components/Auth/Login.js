import React,{useState} from 'react'
import { app } from "../../configFirebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const submitHandler = async (e) => {
      await e.preventDefault();
      try {
        const signInUser = await signInWithEmailAndPassword(auth, email, password)
        console.log("successfully signed in", signInUser.user);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
    <div>Login
         <div>
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
    </div>
  )
}

export default Login