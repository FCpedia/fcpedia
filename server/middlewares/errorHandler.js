module.exports = function(error, req, res, next){
    console.log(error);
    // console.log(JSON.stringify(error, null, 2));


    let statusCode;
    let messageError;

    switch (error.name) {
        case 'value':
            // what to do
            break;
    
        default:
            statusCode = error.status || 500
            messageError = error.message || 'Internal Server Error'
            break;
    }

    res.status(statusCode).json({
        message: messageError
    })
}