import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Label,Input,Button } from "reactstrap"
import userServices from "../services/userServices"
function Login() {
    const [username , setusername] =  useState("")
    const [password,setpassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(username,password)
        userServices.login({username,password}).then((res) =>{
            console.log(res.data)
            window.localStorage.setItem('token',res.data.token)
            window.alert(res.data.response)
            navigate("/home")
        }).catch(err =>{
             
             window.alert(err.response.data.msg)
            })
        
    }
    return(
        <div>
            <h2>Login Form</h2>
            <Form onSubmit={handleLogin}>
            <FormGroup >
        <Label for="username">Username</Label>
        <Input type="text" name="usernmae" id="username" placeholder="Enter username" value={username} onChange= {(e)=> setusername(e.target.value)} />
    </FormGroup>
    <FormGroup >
        <Label for="password">Password</Label>
        <Input   type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        

    </FormGroup>
    <Button color='primary'>Login</Button>
 

            </Form>

        </div>
    )
}
export default Login