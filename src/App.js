
// import Register from "./component/Register";
import Login from "./component/Login";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import Books from "./component/Books";
import BookDetail from "./component/BookDetail";
import { useState } from "react";

function App() {
  const [books,setBooks] = useState([])

  const padding = {
    padding:5
  }

  const match =  useMatch("/books/:id")
  const book =  match ? books.find(b => b._id === match.params.id) : null
  
  return (
   <div className="container">
    <h2>
      Book Review App
    </h2>
    
    
    
      
      <Link style={padding} to ={"/login"}> Login</Link>
      <Link style={padding} to ={"/register"}> Register</Link>
      <Link style={padding} to ={"/register"}> Register</Link>
      <Link style={padding} to ={"/home"}> Home</Link>
      <Link style={padding} to={"/books"}> Books</Link>
    
      <Routes>
      <Route path="/books/:id" element = {<BookDetail book ={book}/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/books" element={<Books books= {books} setBooks = {setBooks}/>}/>
        
      </Routes>

    
   </div>
  );
}

export default App;
