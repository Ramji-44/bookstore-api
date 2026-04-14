const { validationResult } = require("express-validator")

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {   // if errors is not empty return error
        const Errors = errors.array().map(err => err.msg)
        return res.status(400).json({ errors: Errors})
    }

    next()  // moves to controller
}

module.exports = validate
