const mymodel = require("./user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function insertdata(req, res) {
  try {
    const crypt = await bcrypt.hash(req.body.password, 10);
    const obj = {
      name: req.body.name,
      email: req.body.email,
      password: crypt,
    };
    const data = await mymodel.create(obj);
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

async function getdata(req, res) {
  try {
    const data = await mymodel.find();
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

async function deletedata(req, res) {
  try {
    await mymodel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

async function updatedata(req, res) {
  try {
    const data = await mymodel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

async function logindata(req, res) {
  try {
    const data = await mymodel.findOne({ email: req.body.email });
    if (!data) {
      return res.status(400).json({
        status: "fail",
        message: "Email not found",
      });
    }

    const encrypt = await bcrypt.compare(req.body.password, data.password);
    if (encrypt) {
      const token = jwt.sign({ _id: data._id }, "ABC", { expiresIn: "60s" });
      res.status(200).json({
        status: "success",
        data,
        token,
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Password does not match",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

async function verify(req, res) {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, "ABC");
    res.status(200).json({
      status: "success",
      data: decoded,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

module.exports = {
  insertdata,
  getdata,
  deletedata,
  updatedata,
  logindata,
  verify,
};
