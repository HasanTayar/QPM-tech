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
export const ContactUsSchemaHe = z.object({
  name: z.string().min(2, {
    message: "השם שלך קצר מדי. נא להזין לפחות 2 תווים.",
  }),
  email: z.string().email({
    message: 'האימייל שלך לא חוקי. אנא הזן כתובת דוא"ל תקנית.',
  }),
  message: z.string().min(2, {
    message: "הודעה שלך ללא תוכן. אנא כתוב משהו כדי ליצור איתנו קשר.",
  }),
});
