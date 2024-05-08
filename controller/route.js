const {ErrorHandler} = require("../error/error"); // Import the ErrorHandler class as the default export

const reservation = require("../modals/schema");

exports.sendUser = async (req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        time,
        date
    } = req.body;

    if (!firstname || !lastname || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill out the form completely", 400));
    }

    try {
        await reservation.create({
            firstname,
            lastname,
            email,
            phone,
            time,
            date
        });

        res.status(200).json("Reservation Successful");
    } catch (err) {
        if (err.name === "ValidationError") {
            const validationError = Object.values(err.errors).map((er) => er.message);

            return next(new ErrorHandler(validationError.join(","), 400));
        }

   
    }
};
