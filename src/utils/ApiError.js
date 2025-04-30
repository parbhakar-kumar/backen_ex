class ApiError extends Error{
    constructor(
        statusCode,
        massage="Something went wrong ",
        error=[],
        stack=""
    ){
        super(this.message)
        this.statusCode
        this.data-null
        this.message=this.message
        this.success=false
        this.errors=this.errors

        if(stack){
            this.stack=stack
        }else{
            error.capturesStackTrace(this,this.constructor )
        }
    }


}

export{ApiError}