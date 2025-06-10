import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv"
import User from "./models/user.model.js";
import connectDB from "./db/connectDB.js";

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Welcome to the Shopify API Server");
})

// Express route to get Shopify Products
app.get("/api/products", async (req, res) => {
    try {
        const shop = process.env.SHOPIFY_STORE;
        const token = process.env.SHOPIFY_TOKEN;

        const response = await axios.get(`https://${shop}/admin/api/2025-04/products.json`, {
            headers: {
                "X-Shopify-Access-Token": token,
                "Content-Type": "application/json",
            },
        });

        res.json(response.data.products);
    } catch (error) {
        console.error("Error fetching products:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Express route to get orders by email
app.get("/api/orders", async (req, res) => {
    const { email } = req.query
    console.log("inside orders route", email);
    try {
        const shop = process.env.SHOPIFY_STORE;
        const token = process.env.SHOPIFY_TOKEN;

        const response = await axios.get(`https://${shop}/admin/api/2024-01/orders.json?email=${email}`, {
            headers: {
                "X-Shopify-Access-Token": token,
            },
        });

        res.json(response.data.orders);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});


// POST /api/login
app.post("/api/login", async (req, res) => {
    const { formData } = req.body;
    const { email, password } = formData;
    try {
        let user = await User.findOne({ email });

        if (user) return res.status(200).json({ message: "Login successful", user });

        if (!user) {
            const shop = process.env.SHOPIFY_STORE;
            const token = process.env.SHOPIFY_TOKEN;
            const shopifyRes = await axios.get(
                `https://${shop}/admin/api/2024-01/customers/search.json?query=email:${email}`,
                {
                    headers: {
                        "X-Shopify-Access-Token": token,
                        "Content-Type": "application/json",
                    },
                }
            );

            const shopifyCustomer = shopifyRes.data.customers[0];
            if (shopifyCustomer) {
                user = new User({
                    email: shopifyCustomer.email,
                    password: password,
                    shopifyId: shopifyCustomer.id,
                    ordersCount: shopifyCustomer.orders_count,
                    totalSpent: shopifyCustomer.total_spent,
                    createdAt: shopifyCustomer.created_at,
                    updatedAt: shopifyCustomer.updated_at,
                });

                await user.save();
                res.status(201).json({ message: "User Created & Login successful", user });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        }



    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
-0
// Connecting to MongoDB
// connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
