import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export const SendMessageResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendMessageResponse = z.infer<typeof SendMessageResponseSchema>;
export type ContactFormSchemaValues = z.infer<typeof ContactFormSchema>;
