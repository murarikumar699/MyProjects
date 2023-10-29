function Validate(fields,data){
    for(let key of fields){
        if(key == "email"){
            let isValidEmail = validMail(data[key]);
            console.log("isValidEmail",isValidEmail);
            if(isValidEmail == false){
                return "Please fill a valid email address";
            }
        }
        if(!data[key]){
            return "Please fill "+ key;
        }
    }
    return true;
}

function validMail(mail)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}

module.exports = {
    Validate
}