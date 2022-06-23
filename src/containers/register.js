import { Form, Button } from 'react-bootstrap'
import { Component } from 'react';
class Register extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false,
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        const { name, value } = e.target;
        if (e.target.name === 'rememberMe') {
            this.setState({
                rememberMe: !this.state.rememberMe
            })
        }
        else {
            this.setState({
                [name]: value
            })
        }
        console.log(this.state.email)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" name='rememberMe' onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default Register