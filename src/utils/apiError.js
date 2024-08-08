class ApiError extends Error{
    constructor(
        statusCode,
        messaage="Something went wrong",
        errors=[],
        stack=""
    ){
        super(messaage)
        this.statusCode=statusCode
        this.data=null
        this.message=messaage
        this.errors=errors
        this.success=false
      

        if(stack){
            this.stack=stack
        }
        else {
            Error.captureStackTrace(this,this.constructor)
        }
    }

  
}
export {ApiError}