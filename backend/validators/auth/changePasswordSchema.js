// 🧠 Golden Rule (Backend) api validation
// If a route accepts any external input (body, params, query) → it MUST be validated.
// That includes:
// req.body
// req.params
// req.query

import Joi from "joi";

export const changePasswordSchema = Joi.object({
  newPassword: Joi.string().min(8).max(128).required().messages({
    "string.min": "New password must be at least 8 characters long",
    "any.required": "New password is required",
  }),

  confirmPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .required()
    .messages({
      "any.only": "Passwords do not match",
      "any.required": "Confirm password is required",
    }),
}).options({
  abortEarly: false,
  stripUnknown: true,
});
