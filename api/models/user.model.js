import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthequotecircle.org%2Fblank-profile-picture-hd%2F&psig=AOvVaw3MrgpmZ1gczkIpW1Fsywk-&ust=1739177372994000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi8v-SatosDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
