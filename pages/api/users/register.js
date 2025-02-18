import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const body = req.body();
  const user = await User.find({ email: body.email });
  if (user) {
    res.status(400).json({ messages: "User already exist" });
    return;
  }
  try {
    const newUser = await new User(body);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
