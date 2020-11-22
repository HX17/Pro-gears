import jwt from "jsonwebtoken";

const generateToken = (id) => {
  // payload + secret
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
