import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
