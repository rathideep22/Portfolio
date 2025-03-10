"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// API Routes
app.use('/api/contact', contactRoutes_1.default);
// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});
// MongoDB Connection (if configured)
if (process.env.MONGODB_URI) {
    mongoose_1.default
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB connected successfully'))
        .catch((err) => console.error('MongoDB connection error:', err));
}
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.default = app;
