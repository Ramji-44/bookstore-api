
// validation schema for the (Author) inputs operations CRUD

// Get  /authors/:id
const getByIdValidSchema = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Author ID must be a number"
        }
    }
}


// Post /authors
const postValidSchema = {
    name: {
        notEmpty: {
            errorMessage: "Name must not be empty"
        },
        isString: {
            errorMessage: "Name must be string"
        }
    },

    country: {
        optional: false,
        isString: {
            errorMessage: "Country must be string"
        }
    }
}


// Put /authors/:id  -> full update 
const putValidSchema = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Author ID must be a number"
        }
    },

    name: {
        notEmpty: {
            errorMessage: "Name must not be empty"
        },
        isString: {
            errorMessage: "Name must be string"
        }
    },

    country: {
        notEmpty: {
            errorMessage: "Country must not be empty"
        },
        isString: {
            errorMessage: "Country must be string"
        }
    }
}


// Patch /authors/:id -> partial update
const patchValidSchema = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Author ID must be a number"
        }
    },

    name: {
        optional: true,
        notEmpty: {
            errorMessage: "Name cannot be empty"
        },
        isString: {
            errorMessage: "Name must be string"
        }
    },

    country: {
        optional: true,
        isString: {
            errorMessage: "Country must be string"
        }
    }
}


// Delete /authors/:id
const deleteValidSchema = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Author ID must be a number"
        }
    }
}

module.exports = { getByIdValidSchema, postValidSchema, putValidSchema, patchValidSchema, deleteValidSchema }
