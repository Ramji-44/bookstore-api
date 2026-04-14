
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
        in: ["body"],
        notEmpty: {
            errorMessage: "Name must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,   //regEx
            errorMessage: "Name must contain only letters and spaces"
        }
    },

    country: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Country must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "Country must contain only letters and spaces"
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
        in: ["body"],
        notEmpty: {
            errorMessage: "Name must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "Name must contain only letters and spaces"
        }
    },
    
        country: {
            in: ["body"],
            notEmpty: {
                errorMessage: "Country must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "Country must contain only letters and spaces"
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
        in: ["body"],
        optional: true,
        notEmpty: {
            errorMessage: "Name cannot be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "Name must contain only letters and spaces"
        }
    },

    country: {
        in: ["body"],
        optional: true,
        notEmpty: {
            errorMessage: "Country cannot be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "Country must contain only letters and spaces"
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
