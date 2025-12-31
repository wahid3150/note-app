// 🧠 Golden Rule (Backend) api validation
// If a route accepts any external input (body, params, query) → it MUST be validated.
// That includes:
// req.body
// req.params
// req.query

import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": "Username must be string",
    "string.empty": "Username is required",
    "string.min": "User name must be at least 3 character long",
    "string.max": "Username must not exceed 30 characters",
    "any.required": "Username is required",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email must be required",
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(8).max(128).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password must be required",
    "string.min": "Password must be at least 8 character long",
    "string.max": "Password must not be exceed 128 characters",
  }),
}).options({
  abortEarly: false, //Return all validation errors, not just the first
  stripUnknown: true, //Remove fields not defined in the schema
});
