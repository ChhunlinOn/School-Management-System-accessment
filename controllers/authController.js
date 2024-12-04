import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = new userModel({ name,email, password: hashedPassword });
      await newUser.save();
  
      return res.status(200).json({message:'register successfully', newUser });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  };


  export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        return res.status(200).json({message:'login successfully', passwordMatch });
    } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  };