import jwt from "jsonwebtoken";
//first check it is valid or not then ,if valid then allow next function
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    //all the test is not nothing is check validity of user 
    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    //if check it in ask question if it is valid ,then allow to ask question
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
