import express from "express";
import { createListing } from "../Controllers/listing.controller";
const router = express.Router();

router.post("/create", createListing);
