import pool from "../configs/connectDB";
let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');



    return res.status(200).json({
        message: "success",
        data: rows
    });
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, address, email } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: "missing required fields",
        })
    }
    let user = await pool.execute('insert into users (firstName, lastName, email, address) values (?,?,?,?)', [firstName, lastName, email, address]);

    return res.status(200).json({
        message: "success",
        data: user
    })
}

let updateUser = async (req, res) => {
    let id = req.body.id; //req.params dùng để lấy method GET, req.body dùng để lấy method POST
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: "missing required fields",
        })
    }

    let [user] = await pool.execute(`update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?`, [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: "Success",
    });
}
let deleteUser = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            message: "missing id"
        })
    }
    let user = await pool.execute('delete from users where id = ?', [id])

    return res.status(200).json({
        message: "delete ok"
    })
}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}