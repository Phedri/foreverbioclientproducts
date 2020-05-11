

class Authentification {
    successfulSignUp(idUser){
        console.log("test")
        localStorage.setItem("idUser",idUser)
    }
    SaveEmail(email){
        console.log("test")
        localStorage.setItem("email",email)
    }

}
export default new Authentification();