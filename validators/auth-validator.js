const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters." })
        .max(255, { message: "Email must not be more than 255 characters." }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 characters." })
        .max(1024, { message: "Password must not be more than 1024 characters." })
});

// Creating an object schema
const signupSchema = loginSchema.extend({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(45, { message: "Name must not be more than 45 characters." }),

    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters." })
        .max(255, { message: "Username must not be more than 255 characters." }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 characters." })
        .max(20, { message: "Phone must not be more than 20 characters." }),

});

module.exports = { signupSchema, loginSchema };
