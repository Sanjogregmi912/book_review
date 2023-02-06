import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Form,FormFeedback,FormGroup} from 'reactstrap';
import {Label} from 'reactstrap';
import {Input} from 'reactstrap';


const Register = () =>{
    const [username , setusername] = useState('')
    const [password,setpassword] = useState('')
    const [confirmpassword,setconfirmpassword] = useState('')
    const [message, setmessage] = useState('')
    const [valid,setvalid] = useState('')
    const navigate =  useNavigate()

   
const handleRegister = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3001/user/register",{username,password})
    .then(response => {
        console.log(response.data)
        navigate("/login")


})
    .catch(err => console.log(err))
    console.log(username,password,confirmpassword)
}

useEffect (()=>{
    if(password === '' && confirmpassword === ''){
        setvalid("")
    }
    
    else if(password !== confirmpassword){
        setvalid("is-invalid")
        setmessage("password doesnot match")
        return
    }
    else{
    setvalid("is-valid")
    }
},[confirmpassword])

return (
<>
<div>
<p> Register Form </p>
<Form>
    <FormGroup >
        <Label for="username">Username</Label>
        <Input type="text" name="usernmae" id="username" placeholder="Enter username" value={username} onChange= {(e)=> setusername(e.target.value)} />
    </FormGroup>
    <FormGroup >
        <Label for="password">Password</Label>
        <Input  className={valid}  type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <FormFeedback>{message}</FormFeedback>

    </FormGroup>
    <FormGroup >
        <Label for="confirm password">Confirm password</Label>
        <Input className={valid} type="password" name="confirmpassword" id="confirmpassword" placeholder="Enter password Again" value={confirmpassword} onChange ={(e)=> setconfirmpassword(e.target.value)} />
        <FormFeedback>{message}</FormFeedback>
    </FormGroup>
    <Button color='primary' onClick={handleRegister }>Submit</Button>
 
</Form>
</div>
</>
)
}

export default Register