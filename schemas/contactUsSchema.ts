import { z } from "zod";

export const ContactUsSchemaEN = z.object({
  name: z.string().min(2, {
    message: "Your name is too short. Please enter at least 2 characters.",
  }),
  phone: z.string().min(9),
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
  phone: z.string().min(9),
  email: z.string().email({
    message: 'האימייל שלך לא חוקי. אנא הזן כתובת דוא"ל תקנית.',
  }),
  message: z.string().min(2, {
    message: "הודעה שלך ללא תוכן. אנא כתוב משהו כדי ליצור איתנו קשר.",
  }),
});
export const ContactUsSchemaAr = z.object({
  name: z.string().min(2, {
    message: "اسمك قصير جدًا. الرجاء إدخال حرفين على الأقل.",
  }),
  phone: z.string().min(9),
  email: z.string().email({
    message: "بريدك الإلكتروني غير صالح. يرجى إدخال عنوان بريد إلكتروني صالح.",
  }),
  message: z.string().min(2, {
    message: "رسالتك لا تحتوي على محتوى. يرجى كتابة شيء للاتصال بنا.",
  }),
});
