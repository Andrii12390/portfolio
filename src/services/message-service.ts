import { ContactFormSchemaValues, SendMessageResponseSchema } from '@/lib/schemas';

export const messageService = {
  sendMessage: async (data: ContactFormSchemaValues) => {
    try {
      const response = await fetch(`/api/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const rawResult = await response.json();

      const validationResult = SendMessageResponseSchema.safeParse(rawResult);

      if (!validationResult.success) {
        return {
          success: false,
          message: 'Something went wrong',
        };
      }
      return validationResult.data;
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Something went wrong',
      };
    }
  },
};
