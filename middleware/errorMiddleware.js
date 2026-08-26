const errorHandler = (err, req, res, next) => {

    
    console.error(err);


    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation failed",
            error: err.message
        });
    }


    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            message: "Duplicate value"
        });
    }

    return res.status(500).json({
        message: "Internal server error"
    });
};

module.exports = errorHandler;