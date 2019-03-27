import {Formik} from 'formik';
import React, {Component} from 'react'
import './SignUp.css'
import Button from "react-bootstrap/Button";
import {Form, InputGroup} from "react-bootstrap";
import * as yup from "yup";
import {doRegister} from "../../actions/authentification_actions";
import {connect} from "react-redux";


const schema = yup.object({
    firstName: yup.string().required('Veuillez saisir votre prénom'),
    lastName: yup.string().required('Veuillez saisir votre nom'),
    email: yup.string()
        .required('Veuillez saisir votre e-mail')
        .email('Adresse e-mail invalide'),
    password: yup.string()
        .required('Veuillez créer votre mot de passe')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .matches(/[a-z]/, 'Le mot de passe doit contenir des lettres minuscules.')
        .matches(/[A-Z]/, 'Le mot de passe doit contenir des lettres majuscules.')
        .matches(/\d/, 'Le mot de passe doit contenir au moins un chiffre.')
        .matches(/\W/, 'Le mot de passe doit contenir au moins un caractère non alpha-numérique.')
    ,
});

class FormSignUp extends Component {

    constructor(props) {
        super(props)
    }
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

                            <Button variant="success" type="submit" size="lg" block>
                                Créer mon compte
                            </Button>
                        </Form>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isRegistered : state.isRegistered
})


function mapDispatchToProps(disptach) {
    return {
        registerRequest : user => disptach (doRegister(user))
    }
}
const RegisterForm = connect(mapStateToProps, mapDispatchToProps)(FormSignUp)
export default RegisterForm