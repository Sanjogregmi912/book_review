
import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardLink, CardText, CardTitle, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap"
import BookServices from "../services/BookServices"

function BookDetail ({book}) {
    const [review,setreview] =  useState('')

    const [reviews,setreviews] = useState([])
    useEffect(()=>{
        BookServices.getallReviews(book._id).then((res)=>{
           setreviews(res.data)
        }).catch(err=>console.log(err))
    },[])
    
    const Addreview = (e) =>{
        e.preventDefault()
        BookServices.createReview(book._id,{body:review}).then(res=>{
            console.log(res.data)
        }).catch(e=>console.log(e))

    }



    return (
        <div>
            
            
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                        {book.title}
                        </CardTitle>
                        <CardText>
                            {book.author}
                        </CardText>
                        </CardBody>
                        <ListGroup flush>
                            
                                {reviews.map(review => {
                                    return (
                                    <ListGroupItem key={review._id}>
                                        {review.body} by {review.user.username}
                                    </ListGroupItem>
                                    )
                                })}
                            

                        </ListGroup>
                        <CardBody>
                        <CardLink href="#">
                             Edit
                        </CardLink>
                        <CardLink href="#">
                             Delete
                        </CardLink>
                        </CardBody>
                    
                </Card>
           
            <Form onSubmit={Addreview}>
            <FormGroup >
        <Label for="Review">Enter your review</Label>
        <Input type="text" name="review" id="review" placeholder="Enter review" value={review} onChange= {(e)=> setreview(e.target.value)} />
    </FormGroup>

                <Button color='primary' >Add Review</Button>
            </Form>
            
        </div>
    )
}
export default BookDetail