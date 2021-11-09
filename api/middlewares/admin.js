module.exports = (req, res, next) => {
    if (!req.authen.userId) {
        return res.status(400).json({
            success: false, message: 'Unauthorize please login'
        });
    }
    if (req.authen.role != 'admin') {
        return res.status(400).json({
            success: false, message: 'Unauthorized'
        });
    }
    next()
};