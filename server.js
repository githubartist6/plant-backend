require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utls/db");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is runnig http://localhost:/${PORT}`);
    });
});

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

// let's tackle cors
const corsOptions = {
    origin: "https://react-plant.netlify.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
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

// let's define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

