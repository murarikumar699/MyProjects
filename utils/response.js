function resFunction(status,data,message = "",error = null){
    let response = {
        status:status,
        data:data,
        message:message,
        error:error
    }
    return response;
}


module.exports = {
    resFunction
}