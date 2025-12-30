// 🧠 Golden Rule (Backend) api validation
// If a route accepts any external input (body, params, query) → it MUST be validated.
// That includes:
// req.body
// req.params
// req.query

import Joi from "joi";

export const resendVerificationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email must be required",
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
});
