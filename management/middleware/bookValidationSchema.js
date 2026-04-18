// Validation schema for the (books) inputs operations CRUD

const id = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Book id must be a number"
        },
        toInt : true
    }
}

const titleInput = {
    title: {
        in: ["body"],
        notEmpty: {
            errorMessage: "title must not be empty"
        },
        matches: {
            options : /^[a-zA-Z0-9 ?!@&-]+$/,
            errorMessage: "title must contain  letters"
        },
        isLength: {
            options: { min : 1, max: 80 },
            errorMessage: "title must be between 1 and 80 characters." 
        }
    }
}

const priceInput = {
    price: {
        in: ["body"],
        isFloat: {
            options: { min: 0 },
            errorMessage: "Price must be a valid positive number"
        }
    }
}

const stockInput = {
    stock: {
        in: ["body"],
        notEmpty: {
            errorMessage: "stock must not be empty"
        },
        isInt: {
            options: { min: 0 },
            errorMessage: "stock must be a valid positive number"
        }
    }
}


// Get  /books/:id
const getByIdVS = {
    ...id
}

// post  /books
const PostBookVS = {
    ...titleInput,
    ...priceInput,
    ...stockInput
}


// put books  /books/:id
const putBookVS = {
    ...id,
    ...titleInput,
    ...priceInput,
    ...stockInput
}


// patch books /books/:id
const patchBookVS = {
    ...id,
    title: {
        ...titleInput.title,  // if title present, validate, else No
        optional: true
    },
    price: {
        ...priceInput.price,
        optional: true
    },
    stock: {
        ...stockInput.stock,
        optional: true
    }
}


// delete  /books/:id
const deleteBookVS = {
    ...id
}

module.exports = { getByIdVS, PostBookVS, putBookVS, patchBookVS, deleteBookVS }
