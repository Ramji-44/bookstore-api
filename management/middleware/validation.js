const { validationResult } = require("express-validator")

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {   // if errors is not empty return error
        return res.status(400).json({ errors: errors.array() })
    }

    next()  // moves to controller
}

module.exports = validate
