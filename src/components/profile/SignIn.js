import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/CourseDataService'

import axios from 'axios'
const INSTRUCTOR = 'foreverbio'

class signIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.password) {
            errors.password = 'Enter a password'
        } else if (values.description.length < 5) {
            errors.password = 'Enter atleast 5 Characters '
        }

        return errors

    }

    onSubmit(values){
        let username = INSTRUCTOR

        let course = {
            email: values.email,
            password: values.password

        }

        CourseDataService.updateCourse(username, this.state.id, course)
            .then(() => this.props.history.push('/courses'))

        console.log(values);
    }

    submitHandler = e =>{
        //const {email,password}=this.state();
        let errors = {}
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:9092/signIn',this.state)
            .then(response => {

                console.log(response.data)
                if ( response.data==='authentification réussite') {
                    // eslint-disable-next-line no-undef
                    window.open("https://foreverbio.netlify.com/");
                }else{
                    alert("Email or password not correct");
                }
            })
            .catch(error =>{
                console.log(error)
            })


    }



    changerHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {

        let {email,password } = this.state

        return (
            <div>


                <div className="ps-home-contact">
                    <div
                        id="contact-map"
                        data-address="New York, NY"
                        data-title="BAKERY LOCATION!"
                        data-zoom="17"
                    ></div>
                    <br/>
                    <br/>
                    <br/>
                    <br/> <br/> <br/> <br/>
                    <div className="ps-home-contact__form">
                        <header>
                            <h3 color={"lightblue"}>Connectez-vous</h3>
                        </header>


                        <Formik
                            initialValues={{email, password}}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}
                        >
                            {
                                (props) => (
                                    <footer>
                                        <Form onSubmit={this.submitHandler}>
                                            <ErrorMessage name="password" component="div"
                                                          className="alert alert-warning"/>


                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="email" name="email" value={email}
                                                       placeholder="Email" onChange={this.changerHandler}/>
                                            </div>

                                            <div className="form-group">
                                                <label>Mot de passe</label>
                                                <input className="form-control" type="password" name="password"
                                                       value={password}
                                                       placeholder="Mot de passe [au moins 5 Charactères]"
                                                       onChange={this.changerHandler}/>
                                            </div>

                                            <div className="form-group text-center">
                                                <button to={"/Favoris"} className="ps-btn" type={onsubmit}>
                                                    Se connecter
                                                </button>

                                            </div>


                                        </Form>
                                    </footer>
                                )
                            }
                        </Formik>

                    </div>
                </div>
            </div>
        )
    }
}

export default signIn