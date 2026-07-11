import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";

import { useAuth } from "../../context/AuthContext";

const Login = () => {

const navigate = useNavigate();

const { login } = useAuth();

const [form,setForm]=useState({

email:"",

password:""

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const data=await loginUser(form);

login(data.user,data.token);

toast.success("Login Successful");

if(data.user.role==="Admin"){

navigate("/admin");

}

else if(data.user.role==="Faculty"){

navigate("/faculty");

}

else{

navigate("/student");

}

}

catch(error){

toast.error(

error.response?.data?.message ||

"Login Failed"

);

}

};

return(

<div className="min-h-screen flex items-center justify-center bg-slate-100">

<form

onSubmit={handleSubmit}

className="bg-white p-8 rounded-xl shadow-lg w-[400px]"

>

<h1 className="text-3xl font-bold mb-6">

Login

</h1>

<input

type="email"

name="email"

placeholder="Email"

className="w-full border p-3 rounded mb-4"

onChange={handleChange}

/>

<input

type="password"

name="password"

placeholder="Password"

className="w-full border p-3 rounded mb-4"

onChange={handleChange}

/>

<button

className="w-full bg-blue-600 text-white p-3 rounded"

>

Login

</button>

</form>

</div>

);

};

export default Login;