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
        in: ["body"],
        notEmpty : {
            errorMessage : "Title must not be empty"
        },
        isLength: {
            options: { min: 2, max: 200 },
            errorMessage: "Title must be 2-200 characters"
        }
    },
    price : {
        in: ["body"],
        notEmpty : {
            errorMessage : "Price must not be empty"
        },
        isInt : {
            options : {min : 0},
            errorMessage : "Price must be in valid positive Number"
        }
    },
     author_id : {
        in: ["body"],
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
        in: ["body"],
        notEmpty : {
            errorMessage : "Title must not be empty"
        },
        isLength: {
            options: { min: 2, max: 200 },
            errorMessage: "Title must be 2-200 characters"
        }
    },
    price : {
        in: ["body"],
        notEmpty : {
            errorMessage : "Price must not be empty"
        },
        isFloat : {
            option : {min : 0},
            errorMessage : "Price must be a valid positive number "
        }
    },
     author_id : {
        in: ["body"],
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
        in: ["body"],
        optional : true,
        notEmpty : {
            errorMessage : "Title must not be empty"
        },
        isLength: {
            options: { min: 2, max: 200 },
            errorMessage: "Title must be 2-200 characters"
        }
    },

    price : {
        in: ["body"],
        optional: true,
        notEmpty : {
            errorMessage : "Price must not be empty"
        },
        isFloat : {
            options: { min: 100 },
            errorMessage : "Price must be a valid positive number"
        }
    },
     author_id : {
        in: ["body"],
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
