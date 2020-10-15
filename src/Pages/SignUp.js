import React, {useState, useContext} from 'react'
import {
    Container, Form, Button, FormGroup, Label, Col,
    Input, Row, Card, CardBody, CardFooter, CardHeader
} from 'reactstrap'

import firebase from 'firebase/app'
import{UserContext} from '../Context/UserContext'
import {Redirect, Link} from 'react-router-dom'
import {toast} from 'react-toastify'




export default function SignUp() {

    const context = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSignUp = () =>
    {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then( res => {
                    console.log(res)
                    context.setUser({
                        email : res.user.email, 
                          uid : res.user.uid
                     })
                  })
            .catch(error =>{
                    console.log(error)
                    toast(error.message, {type:"error"})
            })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        handleSignUp()
    }

    if(context.user?.uid)
    {
        return <Redirect to="/"></Redirect>
    }
    return (
        <Container className='text-center'>
            <Row>
                <Col lg={6} className='offset-lg-3 mt-3'>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <CardHeader>
                                <h3>Sign Up</h3>
                                <p>Already have an account?  
                                         <Link to="/sin"> 
                                             &nbsp;Log In                                     
                                        </Link>
                                </p>
                            </CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for='email' sm={3}>
                                        Email :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Enter your Email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='password' sm={3}>
                                        Password :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Enter your Password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' block color='primary'>
                                    Sign In
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
    
}
