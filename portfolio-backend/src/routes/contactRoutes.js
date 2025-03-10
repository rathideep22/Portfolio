"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Contact_1 = __importDefault(require("../models/Contact"));
const router = express_1.default.Router();
// Define handler function
function handleContact(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, message } = req.body;
            // Basic validation
            if (!name || !email || !message) {
                return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
            }
            // Save to database if MongoDB is configured
            if (process.env.MONGODB_URI) {
                const contact = new Contact_1.default({
                    name,
                    email,
                    message,
                });
                yield contact.save();
                return res.status(201).json({ success: true, message: 'Message sent successfully' });
            }
            else {
                // If no DB is configured, just log the message
                console.log('New contact message:', { name, email, message });
                return res.status(200).json({ success: true, message: 'Message received (Note: No database configured)' });
            }
        }
        catch (error) {
            console.error('Error in contact submission:', error);
            return res.status(500).json({ success: false, message: 'Server error, please try again later' });
        }
    });
}
// POST - Create a new contact message
router.post('/', (req, res) => {
    handleContact(req, res).catch(err => {
        console.error('Unhandled error in contact route:', err);
        res.status(500).json({ success: false, message: 'Server error, please try again later' });
    });
});
exports.default = router;
