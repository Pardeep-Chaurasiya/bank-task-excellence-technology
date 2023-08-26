const login = (req, res) => {
  const userName = "pardeep";
  const password = "12345";
  const { name, pass } = req.body;

  try {
    if (!name || !pass) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all feilds" });
    }
    if (userName !== name || password !== pass) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Login successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = { login };
