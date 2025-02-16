const express = require("express");
const {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
} = require("../controllers/TextEditorController");

const router = express.Router();

router.post("/", createDocument);
router.get("/", getAllDocuments); // Get all documents
router.get("/:id", getDocumentById);
router.patch("/:id", updateDocument);

module.exports = router;
