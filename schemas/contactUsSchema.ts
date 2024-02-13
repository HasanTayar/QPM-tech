import { z } from "zod";

export const ContactUsSchemaEN = z.object({
  name: z.string().min(2, {
    message: "Your name is too short. Please enter at least 2 characters.",
  }),
  email: z.string().email({
    message: "Your email is invalid. Please enter a valid email address.",
  }),
  message: z.string().min(2, {
    message: "Your message is empty. Please write something to contact us.",
  }),
});
