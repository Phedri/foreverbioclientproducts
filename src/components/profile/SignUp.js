
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/CourseDataService';
import { Redirect } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";
import {ProductConsumer} from "../globalData/Context";


const INSTRUCTOR = 'foreverbio'

class Signup extends Component {



    state = { user : {
            idUser: '',
            firstname: '',
            lastname: '',
            age: '',
            email: '',
            password: ''

        }}


    componentDidMount() {

        console.log(this.state.idUser)

        // eslint-disable-next-line
        if (this.state.idUser == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.idUser)
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
            idUser: values.idUser,
            firstname: values.firstname,
            lastname: values.lastname,
            Age: values.age,
            email: values.email,
            password: values.password

        }


        CourseDataService.updateCourse(username, this.state.idUser, course)
            .then(() => this.props.history.push('/'))
        console.log(values);
    }



    changerHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {

        let {idUser, firstname,lastname,age,email,password } = this.state

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
                    <br/>
                    <br/>
                    <br/> <br/> <br/> <br/>
                <div className="ps-home-contact__form">
                    <header>
                <h3 color= {"lightblue"} >Créez votre compte ou
                    <a href={"/signIn"}>

                        <button class="ps-btn">connectez-vous </button>
                    </a> </h3>
                        </header>




                    <Formik
                        initialValues={{ idUser, firstname,lastname,age,email,password}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        <ProductConsumer>
                        {(value) => {
                        return(
                                <footer>


                                <Form>

                                    <ErrorMessage name="password" component="div"
                                                  className="alert alert-warning" />

                                        <div className="form-group">
                                    <label >Prénom</label>
                                    <input class="form-control"  type="text" name="firstname" value={firstname} placeholder="Prénom" onChange={this.changerHandler} />
                                         </div>

                                        <div className="form-group">
                                    <label>Nom</label>
                                    <input class="form-control"  type="text" name="lastname" value={lastname} placeholder="Nom" onChange={this.changerHandler}/>
                                        </div>

                                        <div className="form-group">
                                    <label> Age</label>
                                    <input class="form-control"  type="text" name="age" value={age} placeholder="Age"onChange={this.changerHandler} />
                                        </div>

                                        <div className="form-group">
                                    <label>Email</label>
                                     <input class="form-control"  type="email" name="email" value={email} placeholder="Email" onChange={this.changerHandler}/>
                                        </div>

                                        <div className="form-group">
                                    <label>Mot de passe</label>
                                    <input class="form-control"  type="password" name="password" value={password} placeholder="Mot de passe [au moins 5 Charactères]"onChange={this.changerHandler}/>
                                        </div>

                                    <div className="form-group text-center">

                                        <Link to="/"
                                              onClick={() => value.submitHandler(firstname,lastname,age,email,password)}>
                                        <button  class="ps-btn" type={onsubmit}>
                                            S'inscrire
                                        </button>
                                        </Link>

                                    </div>


                                </Form>


                                    </footer>
                            );}
                        }
                        </ProductConsumer>
                    </Formik>

                </div>
                </div>
            </div>
        )
    }
}

export default Signup;