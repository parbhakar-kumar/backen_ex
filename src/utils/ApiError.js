class ApiError extends Error{
    constructor(
        statusCode,
        massage="Something went wrong ",
        error=[],
        statck=""
    ){
        super(this.message)
        this.statusCode
        this.data-null
        this.message=this.message
        this.success=false
        this.errors=this.errors

        if(statck){
            this.stack=statck
        }else{
            error.capturesStackTrace(this,this.constructor )
        }
    }


}

export{ApiError}