function validateData(data){
    let inputKeyValue = Object.entries(data);
    let isValidate = true;
    for(let value of inputKeyValue){
        if(value[1] === ''){
            let element = document.createElement('small');
            element.innerHTML = value[0].charAt(0).toUpperCase()+ value[0].slice(1)+' is required';
            element.style.cssText = 'color:red';
            if(document.getElementById(value[0]).nextSibling){
                document.getElementById(value[0]).nextSibling.remove();
            }
            document.getElementById(value[0]).after(element)
            isValidate = false;
        }else{
            if(document.getElementById(value[0]).nextSibling){
                document.getElementById(value[0]).nextSibling.remove();
            }

            if(value[0]== 'password' && data.password.length < 4){
                let element = document.createElement('small');
                element.innerHTML = 'password must be at least 3 letter long';
                element.style.cssText = 'color:red';
                document.getElementById(value[0]).after(element)
                return false
            }
            if(data.password !== data.confirmPassword){                                
                let element = document.createElement('small');
                element.innerHTML = 'password and confirm password should be same';
                element.style.cssText = 'color:red';
                // document.getElementById(value[0]).nextSibling.remove();
                if(value[0] == 'password' || value[0] == 'confirmPassword'){
                    document.getElementById(value[0]).after(element)
                }
                isValidate = false;
            }
            
        }
    }
    return isValidate;
}


function removeValue(data){
    let input = Object.keys(data);
    for(let d of input){
        document.getElementById(d).value = "";
    }
}