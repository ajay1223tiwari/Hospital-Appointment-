import Doctor from "../models/DoctorSchema.js";
import BookingSchema from "../models/BookingSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, select: "-password" }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Updated",
        data: updatedDoctor,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(
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

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id).populate('reviews').select("-password");
    res
      .status(200)
      .json({
        success: true,
        message: "Doctors found",
        data: doctor,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "No doctor found" });
  }
};

export const getAllDoctor = async (req, res) => {

  try {
    const { query } = req.query;
    let doctors;

    if(query){
      doctors = await Doctor.find({
        isApproved: 'apporoved',
         $or:[
          {name:{$regex: query, $options:'i'} },
          {specialization:{$regex: query, $options:'i'}}
        ],
      }).select("-password");
    } else{
       doctors = await Doctor.find({ isApproved: 'approved'}).select("-password");

    }
   
    res
      .status(200)
      .json({
        success: true,
        message: "Doctors found",
        data: doctors,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  //console.log("Doctor ID:", doctorId);  // Debugging statement
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId});

    

    res
      .status(200)
      .json({
        success: true,
        message: "Getting Profile Info",
        data: { ...rest, appointments },
      });
  } catch (err) {
    // Debugging statement
    res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};


