import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, } from 'reactstrap';
import { ProductConsumer } from "./globalData/Context";
import "../css/form.css"

const useStyles = makeStyles((theme) => ({

  typography: {
    padding: theme.spacing(2),
  },
}));



export default function SimplePopover(props) {


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inConnection, setInConnection] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [birthDate, setbirthDate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassord, setConfirmPassword] = React.useState("");
  const [autoFocusInput, setAutoFocusInput] = React.useState(true);
  const [autoFocusPro, setAutoFocusPro] = React.useState("email");
  const [wrongCredentielsError, setWrongCredentielsError] = React.useState(false);
  const [passWordIsShown, setPassWordIsShown] = React.useState(false);
  const [emailError, setEmailError]  = React.useState(false);
  const [firstNameError, setfirstNameError]  = React.useState(false);
  const [lastNameError, setLastNameError]  = React.useState(false);
  const [passwordError,setPasswordError]  = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function Formulaire() {

    console.log("passed");
    if(props.user != null && props.user !== ""){
      return profil;
    }
    if (inConnection) {
      return <Form style={{
        width: "300px",
        textAlign: "left",
      }}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" autoFocus={autoFocusInput} name="email" id="exampleEmail" placeholder="Email" value={email} onChange={
            (event) => {
              setAutoFocusInput(true)
             
              setWrongCredentielsError(false);
              setEmailError(false)
               setEmail(event.target.value)
            }
          } />
 <div style={{
          paddingTop:"5px",
          display : emailError ? "block":"none"
        }}>
          <p  style={{ fontSize: 12, color: "red" }}>
      

            {" Email invalide !"}
          </p>
        </div>

        </FormGroup>
       
        <FormGroup>
          <Label for="examplePassword">Mot de passe</Label>
          <div >
          <input placeholder="Mot de passe"id="password-field"  autoFocus={!autoFocusInput} value ={password} type={passWordIsShown ? "text" : "password"} class="form-control" name="password"  onChange={
            (event) => {
              setAutoFocusInput(false)
              setPassword(event.target.value)
              setWrongCredentielsError(false);
              setEmailError(false)
            }
          }/>
              <span toggle="#password-field" class="fa fa-fw fa-eye fa-2x field-icon toggle-password" style={{
                marginRight: "10px",
                display : !passWordIsShown ? "block":"none"
              }} onClick={
                (event) => {
                  setPassWordIsShown(true);
                }
              }></span>

<span toggle="#password-field" class="fa fa-fw fa-eye-slash fa-2x field-icon toggle-password" style={{
                marginRight: "10px",
                display : !passWordIsShown ? "none":"block"
              }} onClick={
                (event) => {
                  setPassWordIsShown(false);
                }
              }></span>
          </div>
        
             


        </FormGroup>

    

        <Button color="success" onClick= {
          async () => {
            
            if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
              setEmailError(true);
              
              
          } else {
            if ( await props.connectUser(email, password) === false) {
              setWrongCredentielsError(true);

              console.log("after button clicked" + wrongCredentielsError);
            } else {
              handleClose();
            }
          }
      
           
          }
        }>Se connecter</Button> <Button color="link" onClick={() => setInConnection(!inConnection)

        }>S'inscrire</Button>
        <div style={{
          display : wrongCredentielsError ? "block":"none"
        }}>
          <p  style={{ fontSize: 12, color: "red", textAlign: "center", margin: "20px 20px", fontWeight: "bold" }}>
            <i class="fas fa-exclamation-triangle"></i>

            {" Email ou mot de passe incorrecte !"}
          </p>
        </div>
      </Form>

    }
    return <Form style={{
      width: "300px",
      textAlign: "left",
    }}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input  autoFocus={autoFocusPro === "email"? true : false}value={email} type="email" name="email" id="exampleEmail" placeholder="Email"  onChange={
          (event) => {
            setAutoFocusPro("email");
            setEmail(event.target.value);
            setEmailError(false);
          }
        } />

<div style={{
          paddingTop:"5px",
          display : emailError ? "block":"none"
        }}>
          <p  style={{ fontSize: 12, color: "red" }}>
      

            {" Email invalide !"}
          </p>
        </div>

      </FormGroup>
      
      <FormGroup>
        <Label for="exampleEmail">Nom</Label>
        <Input autoFocus={autoFocusPro === "lastName"? true : false}value={lastName}type="email" name="email" id="exampleEmail" placeholder="Nom" onChange={
          (event) => {
            setAutoFocusPro("lastName");
            setlastName(event.target.value);
            setLastNameError(false);
          }
        } />

<div style={{
          paddingTop:"5px",
          display : lastNameError ? "block":"none"
        }}>
          <p  style={{ fontSize: 12, color: "red" }}>
      

            {"Votre nom doit contenir que des lettres."}
          </p>
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Prénom</Label>
        <Input autoFocus={autoFocusPro === "firstName"? true : false}value={firstName}type="text" name="email" id="exampleEmail" placeholder="Prénom"  onChange={
          (event) => {
            setAutoFocusPro("firstName");
            setfirstName(event.target.value);
            setfirstNameError(false);
          }
        } />

<div style={{
          paddingTop:"5px",
          display : firstNameError ? "block":"none"
        }}>
          <p  style={{ fontSize: 12, color: "red" }}>
      

            {"Votre prénom doit contenir  que des lettres."}
          </p>
        </div>
      </FormGroup>
      <FormGroup>
        <Label  for="exampleDatetime">Date de naissance</Label>
        <Input
        autoFocus={autoFocusPro === "birthDate"? true : false}value={birthDate}
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="dd/mm/aaaa" onChange={
            (event) => {
              setAutoFocusPro("birthDate");
              setbirthDate(event.target.value);
            }
          }
        />

      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Mot de passe</Label>
        <Input value={password} autoFocus={autoFocusPro === "password"? true : false}  type="password" name="password" id="examplePassword" placeholder="(8 caractère minimum)" onChange={
            (event) => {
              setAutoFocusPro("password");
              setPassword(event.target.value);
              setPasswordError(false);
            }
          }/>
        <div style={{
          paddingTop:"5px",
          display : passwordError ? "block":"none"
        }}>
          <p  style={{ fontSize: 12, color: "red" }}>
      

            {"Votre mot de passe doit contenir au moins 8 caractères."}
          </p>
        </div>
      </FormGroup>
      <FormGroup>

        <Label for="examplePassword">Confirmer mot de passe</Label>
        <Input value={confirmPassord} autoFocus={autoFocusPro === "confirmPassword"? true : false}  type="password" name="password" id="examplePassword" placeholder="(8 caractère minimum)" onChange={
            (event) => {
              setAutoFocusPro("confirmPassword");
              setConfirmPassword(event.target.value);
            }
          } />

      </FormGroup>
      <Button color="success" onClick={
        (event) => {
          if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailError(true);
        }

        if (!firstName.match(/^[A-Za-z\s]+$/)) {
          setfirstNameError(true)// = "Votre prénom doit contenir  que des lettres.";
      }
  
      if (!lastName.match(/^[A-Za-z\s]+$/)) {
          setLastNameError(true) // = "Votre nom doit contenir que des lettres.";
      }
  
  
      if (password.length < 8) {
          setPasswordError(true)// = "Votre mot de passe doit contenir au moins 8 caractères.";
      }
      console.log(emailError)
      console.log(firstNameError)
      console.log(lastNameError)
      console.log(passwordError)
      if(emailError===false && firstNameError===false &&lastNameError===false && passwordError===false){
        console.log("tried to login")
        props.signUpUser(email,firstName,lastName,password,birthDate,"");
      
      }


      }}>S'inscrire</Button> <Button color="link" onClick={() => setInConnection(!inConnection)

      }>Se connecter</Button>
    </Form>
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const info = (props.user !=null && props.user !== "") ?  <a aria-describedby={id} onClick={handleClick}>{props.user?.email}</a> : <a aria-describedby={id} onClick={handleClick}>Se connecter & S'inscrire</a>;
  
  const profil = (<Form style={{
    width: "300px",
    textAlign: "left",
  }}>
     <FormGroup>
                <img
                  src={(props.user == null || props.user.url === "" )? "https://n-allo.be/wp-content/uploads/2016/08/ef3-placeholder-image-450x350.jpg" : props.user.url }
                  alt=""
                  style={{
                    width: "120px",
                    height: "120px",
                    display: "block",
                    margin: "auto",
                    marginBottom: "3px",
                    borderRadius: "50%"
                  }}
                />
              </FormGroup>

    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Email" value={props.user?.email}/>
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Nom</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Nom" value={props.user?.lastName} />
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Prénom</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Prénom" value={props.user?.firstName}/>
    </FormGroup>
    <FormGroup>
      <Label for="exampleDatetime">Date de naissance</Label>
      <Input
       value={props.user?.birthDate}
        type="text"
        name="datetime"
        id="exampleDatetime"
        placeholder="dd/mm/aaaa"
      />
    </FormGroup>
  
    <Button color="primary">Modifier</Button> <a href="/"><Button color="danger" onClick={
      (event) => {
        props.disconnectUser()
        handleClose()
      }
    }>Se déconnecter</Button></a>

    
  </Form>)
  
  return (

    <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
      <div class="header__actions">
       {info}

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            <Formulaire inConnection={inConnection} ></Formulaire>
          </Typography>
        </Popover>


        <div class="btn-group ps-dropdown">
          <a
            class="dropdown-toggle"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MAD
          <i class="fa fa-angle-down" />
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">
                <img src="images/flag/maroc.svg" alt="" /> MAD
            </a>
            </li>
            <li>
              <a href="#">
                <img src="images/flag/usa.svg" alt="" /> USD
            </a>
            </li>
            <li>
              <a href="#">
                <img src="images/flag/singapore.svg" alt="" /> SGD
            </a>
            </li>
            <li>
              <a href="#">
                <img src="images/flag/japan.svg" alt="" /> JPN
            </a>
            </li>
          </ul>
        </div>
        <div class="btn-group ps-dropdown">
          <a
            class="dropdown-toggle"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Langue
          <i class="fa fa-angle-down" />
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Français</a>
            </li>
            <li>
              <a href="#">Anglais</a>
            </li>
            <li>
              <a href="#">Espagnol</a>
            </li>
            <li>
              <a href="#">Allemand</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}