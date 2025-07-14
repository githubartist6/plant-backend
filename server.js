require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utls/db");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT = process.env.PORT || 5100;

// ✅ Multiple Origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://serene-scone-b5bfbc.netlify.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for this origin"));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
const authRoute = require("./router/auth-Router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-Route");
const addressRoute = require("./router/address-router");
const multipaldataRoute = require("./router/multipaldata-router");
const plantheroRoute = require("./router/planthero-router");
const categoriesRoute = require("./router/categories-router");
const shopcategoriesRoute = require("./router/shopcategories-route");
const newProductsRoute = require("./router/newProducts-route");
const plantCategoriesRoute = require("./router/plantCategories-route");
const featuresRoute = require("./router/features-route");
const adminRoute = require("./router/admin-router");

// ✅ Use Routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/order", orderRoute);
app.use("/api/form", addressRoute);
app.use("/api/data", multipaldataRoute);
app.use("/api/data", plantheroRoute);
app.use("/api/data", categoriesRoute);
app.use("/api/data", shopcategoriesRoute);
app.use("/api/data", newProductsRoute);
app.use("/api/data", plantCategoriesRoute);
app.use("/api/data", featuresRoute);
app.use("/api/admin", adminRoute);

// ✅ Error Middleware
app.use(errorMiddleware);

// ✅ DB Connection and Start Server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
});
