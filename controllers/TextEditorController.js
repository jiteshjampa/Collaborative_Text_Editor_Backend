const TextEditor = require("../models/TextEditor");

// Create a new document
const createDocument = async (req, res) => {
  const { TextId, Title } = req.body;

  try {
    let doc = await TextEditor.findOne({ TextId });
    if (!doc) {
      doc = new TextEditor({ TextId, Title, content: "" });
      await doc.save();
    }
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ error: "Error creating document" });
  }
};

// Get all documents
const getAllDocuments = async (req, res) => {
  try {
    const docs = await TextEditor.find({}, "TextId Title"); // Return only necessary fields
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching documents" });
  }
};

// Get a single document by ID
const getDocumentById = async (req, res) => {
  try {
    const doc = await TextEditor.findOne({ TextId: req.params.id });
    if (!doc) return res.status(404).json({ error: "Document not found" });
    res.json(doc);
  } catch (error) {
    res.status(500).json({ error: "Error fetching document" });
  }
};
const updateDocument = async (req, res) => {
  const { content, Title } = req.body;
  const TextId = req.params.id; // This is a UUID (string), not an ObjectId

  try {
    const updatedDoc = await TextEditor.findOneAndUpdate(
      { TextId }, // Find by TextId instead of _id
      { content, Title, updatedAt: new Date() },
      { new: true } // Return the updated document
    );

    if (!updatedDoc) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({
      content: updatedDoc.content,
      Title: updatedDoc.Title,
      updatedAt: updatedDoc.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating document", error });
  }
};

module.exports = {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
};
