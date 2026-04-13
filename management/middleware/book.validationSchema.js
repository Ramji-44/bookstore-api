// Validation schema for the (books) inputs operations CRUD

// Get  /books/:id
const getByIdVS = {
    id : {
        in : ["params"],
        isInt : {
            errorMessage : "Book Id must be a Number"
        }
    }
}


// post  /books
const PostBookVS = {
    title : {
        notEmpty : {
            errorMessage : "Title must not be empty"
        },
        isString : {
            errorMessage : "Title must be String"
        }
    },
    price : {
        notEmpty : {
            errorMessage : "Price must not be empty"
        },
        isInt : {
            errorMessage : "Price must be in Number"
        }
    }, 
     author_id : {
        notEmpty : {
            errorMessage : "author_id must not be empty"
        }, 
        isInt : {
            errorMessage : "author_id must be in number"
        }
     }
}


// put books  /books/:id
const putBookVS = {
    id : {
        in : ["params"],
        isInt: {
        errorMessage: "ID must be number"
    }
    },
    title : {
        notEmpty : {
            errorMessage : "Title must not be empty"
        },
        isString : {
            errorMessage : "Title must be string"
        }
    },
    price : {
        notEmpty : {
            errorMessage : "Price must not be empty"
        },
        isInt : {
            errorMessage : "Price must be in Number"
        }
    }, 
     author_id : {
        notEmpty : {
            errorMessage : "author_id must not be empty"
        }, 
        isInt : {
            errorMessage : "author_id must be in number"
        }
     }
}


// patch books /books/:id
const patchBookVS = {
    id : {
        in : ["params"],
        isInt : {errorMessage : "Id must be a Number"}
    },
    title : {
        optional : true,
        notEmpty : {
            errorMessage : "Title must not be empty"
        },
        isString : {
            errorMessage : "Title must be string"
        }
    },
    price : {
        optional: true,
        notEmpty : {
            errorMessage : "Price must not be empty"
        },
        isInt : {
            errorMessage : "Price must be in Number"
        }
    }, 
     author_id : {
        optional : true,
        notEmpty : {
            errorMessage : "author_id must not be empty"
        },
        isInt : {
            errorMessage : "author_id must be in number"
        }
    }
}


// delete  .books/:id
const deleteBookVS = {
    id : {
        in : ["params"],
        isInt : {
            errorMessage : "Book ID must be a number"
        }
    }
}

module.exports = { getByIdVS, PostBookVS, putBookVS, patchBookVS, deleteBookVS }