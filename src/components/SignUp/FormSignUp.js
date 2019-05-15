import {Formik} from 'formik';
import React, {Component} from 'react'
import './SignUp.css'
import {Form, InputGroup} from "react-bootstrap";
import schema from './SchemaValidation'
import {doRegister} from "../../actions/authentification_actions";
import {connect} from "react-redux";
import AuthButton from "../Button/AuthButton";

class FormSignUp extends Component {

    handleSubmit = (values, actions) => {
        console.log(values)
        this.props.registerRequest({values})
        actions.setSubmitting(false);
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',

                    }}
                    validationSchema={schema}
                    onSubmit={this.handleSubmit}

                    render={props => (
                        <Form onSubmit={props.handleSubmit}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="Prénom"
                                    value={props.values.firstName}
                                    onChange={props.handleChange}
                                    isInvalid={props.touched.firstName && props.errors.firstName}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className="addOn"><i className="fas fa-user"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <Form.Control.Feedback type="invalid">
                                    {props.errors.firstName}
                                </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Nom"
                                    value={props.values.lastName}
                                    onChange={props.handleChange}
                                    isInvalid={props.touched.lastName && props.errors.lastName}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className="addOn"><i className="fas fa-user"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <Form.Control.Feedback type="invalid">
                                    {props.errors.lastName}
                                </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup>
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    name="email"
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    isInvalid={props.touched.email && props.errors.email}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className="addOn"><i className="fas fa-envelope"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <Form.Control.Feedback type="invalid">
                                    {props.errors.email}
                                </Form.Control.Feedback>
                            </InputGroup>

                            <InputGroup>
                                <Form.Control
                                    type="password"
                                    placeholder="Créer votre mot de passe"
                                    name="password"
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    isInvalid={props.touched.password && props.errors.password}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className="addOn"><i className="fas fa-lock"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <Form.Control.Feedback type="invalid">
                                    {props.errors.password}
                                </Form.Control.Feedback>
                            </InputGroup>

                            <AuthButton label="Créer un compte" isRegistering={this.props.isRegistering}/>

                        </Form>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isRegistered : state.authentificationState.isRegistered,
    isRegistering : state.authentificationState.isRegistering
})


function mapDispatchToProps(disptach) {
    return {
        registerRequest : user => disptach (doRegister(user))
    }
}
const RegisterForm = connect(mapStateToProps, mapDispatchToProps)(FormSignUp)
export default RegisterForm