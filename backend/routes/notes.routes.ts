import express, { type Request, type Response } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  toggleBookmark
} from "../controllers/notes.controller";
import VerifyUser from "../middleware/VerifyUser";

const router = express.Router();

router.use(VerifyUser);
router.get("/user/:id", getAllNotes);
router.get("/:id", getSingleNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);
router.patch("/:id/bookmark", toggleBookmark); 

export default router;
