// validation schema for the (Author) inputs operations CRUD

const id = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Author ID must be a number"
        },
        toInt: true
    }
}

const nameInput = {
    name: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "name must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "name must contain only letters and spaces"
        },
        isLength: {
            options: { min: 3, max: 80 },
            errorMessage: "name must be between 3 and 80 characters"
        }
    }
}

const countryInput = {
    country: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "country must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "country must contain only letters and spaces"
        },
        isLength: {
            options: { min: 2, max: 80 },
            errorMessage: "country must be between 2 and 80 characters"
        }
    }
}

// GET /authors/:id
const getByIdValidSchema = {
    ...id
}

// POST /authors
const postValidSchema = {
    ...nameInput,
    ...countryInput
}

// PUT /authors/:id (full update)
const putValidSchema = {
    ...id,
    ...nameInput,
    ...countryInput
}

// PATCH /authors/:id (partial update)
const patchValidSchema = {
    ...id,
    name: {
        ...nameInput.name,
        optional: true
    },
    country: {
        ...countryInput.country,
        optional: true
    }
}

// DELETE /authors/:id
const deleteValidSchema = {
    ...id
}


module.exports = { getByIdValidSchema, postValidSchema, putValidSchema, patchValidSchema, deleteValidSchema }
