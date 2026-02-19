import express from "express";
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

// CREATE note
router.post("/", createNote);

// GET all notes
router.get("/", getAllNotes);

// GET single note
router.get("/:id", getNoteById);

// UPDATE note
router.put("/:id", updateNote);

// DELETE note
router.delete("/:id", deleteNote);

export default router;
