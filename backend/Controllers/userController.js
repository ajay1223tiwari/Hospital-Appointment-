import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Review from "../models/ReviewSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, select: "-password" }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Updated",
        data: updatedUser,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(
      id,
      { $set: req.body },
      { new: true, select: "-password" }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully deleted",
      })
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");
    res
      .status(200)
      .json({
        success: true,
        message: "User found",
        data: user,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

export const getAllUser = async (req, res) => {

  try {
    const users = await User.find({}).select("-password");
    res
      .status(200)
      .json({
        success: true,
        message: "Users found",
        data: users,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(UserId)
    if(!user){
       return res.status(404).json({success: false, message: "User not found", });
    }
    const {password, ...rest} = user._doc
    res.status(200).json({ success: true, message: "profile info is getting", data:{...rest} });
       

    
     
  } catch (err) {
    res.status(500).json({ success: false, message: "something wrong" });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    //step1: retrieve appointments from booking
    const bookings = await Booking.find({ user: req.userId });

    //step2: extract doctor ids from appoitnment bookings
    const doctorIds = bookings.map(el => el.doctor.id);

    //step2: retrieve doctor using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res
      .status(200)
      .json({ success: true, message: "Getting Appointments", data: doctors });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something get wrong, cannot get" });
  }
};





