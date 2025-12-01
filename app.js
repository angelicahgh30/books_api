const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(express.json());
app.use(cors);


app.get("/books", async (req, res) => {});

// Menampilkan buku berdasarkan ID
app.get("/books/:id", async (req, res) => {});

// Menambahkan buku baru
app.post("/books", async (req, res) => {});

// Edit buku 
app.put("/books/:id", async (req, res) => {});

// Menghapus buku
app.delete("/books/:id", async (req, res) => {});