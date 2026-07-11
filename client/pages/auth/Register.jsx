import { useState } from "react";

import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";

const Register=()=>{

const [form,setForm]=useState({

name:"",

email:"",

password:"",

role:"Student"

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

await registerUser(form);

toast.success("Registration Successful");

}

catch(error){

toast.error("Registration Failed");

}

};

return(

<div className="min-h-screen flex items-center justify-center bg-slate-100">

<form

onSubmit={handleSubmit}

className="bg-white p-8 rounded-xl shadow-lg w-[450px]"

>

<h1 className="text-3xl font-bold mb-6">

Register

</h1>

<input

name="name"

placeholder="Full Name"

className="w-full border p-3 rounded mb-4"

onChange={handleChange}

/>

<input

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

<select

name="role"

className="w-full border p-3 rounded mb-4"

onChange={handleChange}

>

<option>

Student

</option>

<option>

Faculty

</option>

</select>

<button

className="w-full bg-green-600 text-white p-3 rounded"

>

Register

</button>

</form>

</div>

);

};

export default Register;