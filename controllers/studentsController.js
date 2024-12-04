import studentsModel from "../models/studentsModel.js";

export const createStudents = async (req, res) => {
    const {IDCard,name,email,phone,classid} = req.body;
    try {
      const newStudents = new studentsModel({
        IDCard,
        name,
        email,
        phone,
        classid,
        new: true
      });
      await newStudents.save();
      return res.status(201).json({ newStudents });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const getStudentsById = async (req, res) => {
    const { id } = req.params;
    try {
      const studentDetail = await studentsModel.findById(id);
      if (!studentDetail) {
        return res.status(404).json({ message: "Students not found" });
      }
      return res.status(200).json({ studentDetail });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const getAllstudents = async (req, res) => {
    try {
      const Allstudent = await studentsModel.find();
      if (!Allstudent) {
        return res.status(404).json({ message: "Allstudents not found" });
      }
      return res.status(200).json({ Allstudent });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateStudents = async (req, res) => {
    const {IDCard,name,email,phone,classid} = req.body;
    try {
      const updateStudents = await studentsModel.findByIdAndUpdate(req.params.id,{IDCard,name,email,phone,classid},{new:true})
      return res.status(201).json({message:'update sucessfully', updateStudents });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteStudents = async (req, res) => {
    try {
        const findidstudent = await studentsModel.findById(req.params.id);
        if(!findidstudent){
            return res.status(400).json({message:'student not found'}); 
        }
      const deleteStudents = await studentsModel.findByIdAndDelete(req.params.id)
      return res.status(201).json({message:'delete sucessfully', deleteStudents });
    } catch (error) {
      console.log(error.message);
    }
  };