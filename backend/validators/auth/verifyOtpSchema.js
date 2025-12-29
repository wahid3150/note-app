// 🧠 Golden Rule (Backend) api validation
// If a route accepts any external input (body, params, query) → it MUST be validated.
// That includes:
// req.body
// req.params
// req.query

import Joi from "joi";

export const verifyOtpSchema = Joi.object({
  otp: Joi.string()
    .pattern(/^\d{6}$/)
    .required()
    .messages({
      "string.base": "OTP must be a string",
      "string.pattern.base": "OTP must be exactly 6 digits",
      "any.required": "OTP is required",
    }),
}).options({
  abortEarly: false,
  stripUnknown: true,
});
