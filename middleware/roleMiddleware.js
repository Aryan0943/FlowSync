const roleMiddleware = (allowedRoles) => {

    return (req, res, next) => {

        // User must be authenticated
        if (!req.user) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }


        // Check role
        if (
            !allowedRoles.includes(
                req.user.role
            )
        ) {
            return res.status(403).json({
                message: "Access denied"
            });
        }


        // Role allowed
        next();
    };
};


module.exports = roleMiddleware;