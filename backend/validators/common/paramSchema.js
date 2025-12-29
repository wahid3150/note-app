// 🧠 Golden Rule (Backend) api validation
// If a route accepts any external input (body, params, query) → it MUST be validated.
// That includes:
// req.body
// req.params
// req.query

import Joi from "joi";

// /verify-otp/:email ❌ Needs TWO validations because This route accepts:
// req.params.email
// req.body.otp
// So both must be validated

export const emailParamsSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email in URL",
    "any.required": "Email is required",
  }),
}).options({
  abortEarly: false,
  stripUnknown: true,
});
