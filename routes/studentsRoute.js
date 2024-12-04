import express from "express";
import {
 createStudents,
 getAllstudents,
 getStudentsById,
 updateStudents,
 deleteStudents
} from "../controllers/studentsController.js";
const router = express.Router();

router.post("/create", createStudents);
router.get("/:id", getStudentsById);
router.get("/", getAllstudents);
router.put("/update/:id", updateStudents);
router.delete("/delete/:id", deleteStudents);

export default router;
