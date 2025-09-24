import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "./config/passport.js";

const app = express();

// --- Standard Middleware ---
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(passport.initialize());


// --- Routes Import ---
import userRouter from './routes/user.routes.js';
import shoeRouter from './routes/shoe.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js';
import wishlistRouter from './routes/wishlist.routes.js';
import reviewRouter from './routes/review.routes.js';
import googleAuthRouter from './routes/auth.google.routes.js';

// Import our new centralized error handler
import { errorHandler } from "./utils/errorHandler.js";


// --- Routes Declaration ---
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", googleAuthRouter);
app.use("/api/v1/shoes", shoeRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/wishlist", wishlistRouter);
app.use("/api/v1/reviews", reviewRouter);


// --- Global Error Handling Middleware ---
// This single line replaces the old inline error handler.
app.use(errorHandler);


export { app };