const User=require('../models/users')
const path=require('path')


exports.getForm=(req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/user.html'))
}


exports.postAddUser= async (req, res, next) => {
    console.log("Received from submission")
    console.log("Body", req.body)
    try {
        const data = await User.create({
            name: req.body.username,
            phonenumber: req.body.phone,
            email: req.body.email
        });
        res.status(201).json({
            message: "User added successfully",
            newUserDetail: data
        })
    }
    catch (err) {
        console.error("Error adding user:", err);
        res.status(500).json({ error: 'Failed to add user' });
    }
}

exports.getUser=async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.status(200).json({ allUsers: users })
    }
    catch (err) {
        console.log("here is error")
        console.log(err)
    }
}

exports.deleteUser=async(req, res, next) => {
    const userId = req.params.id
    try {
        User.destroy({ where: { id: userId } })
        res.status(200).json({ message: "user Deleted" })
    }
    catch (err) {
        console.error("Error deleting user", err)
        res.status(500).json({ error: "failed to delete" })
    }


}