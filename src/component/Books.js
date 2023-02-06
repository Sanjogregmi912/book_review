import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Badge, Button, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap"
import BookServices from "../services/BookServices"

function Books ({books,setBooks}){

    const [title,settitle] =  useState('')
    const [author,setauthor] = useState('')

    useEffect(()=>{
        BookServices.getall().then(res =>{
            setBooks(res.data)
        }).catch((err)=> console.log(err))

    },[])
    const addbook = (e) =>{
        e.preventDefault()
        BookServices.postnewbook({title,author}).then(res =>{

            console.log(res.data)
            setBooks(books.concat(res.data))
            setauthor('')
            settitle("")
        }).catch(err => console.log(err))
        console.log(title,author)
    }

   

    return (
        <div>
            
            <h2> list of books</h2>
            <ListGroup>
                {books.map(book=>{
                    return (
                        <ListGroupItem key = {book._id}>{book.title} by {book.author}
                        {' '}
                        <Badge pill color="warning">
                            <Link to={`/books/${book._id}`}>  {book.reviews.lenght} reviews </Link>
                            
                        </Badge>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            <Form onSubmit={addbook}>
    <FormGroup >
        <Label for="Title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Enter title" value={title} onChange= {(e)=> settitle(e.target.value)} />
    </FormGroup>
    <FormGroup >
        <Label for="Author">Author</Label>
        <Input   type="text" name="Author" id="Author" placeholder="Enter Author" value={author} onChange={(e)=>{setauthor(e.target.value)}} />
        

    </FormGroup>

    <Button color='primary' >Submit</Button>
 
</Form>
        </div>
    )
}

export default Books