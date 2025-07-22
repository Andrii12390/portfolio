'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { TextInputField, TextAreaField } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ICON_SIZES, ICON_STROKE_WIDTH } from '@/constants';
import { ContactFormSchema, ContactFormSchemaValues } from '@/lib/schemas';
import { messageService } from '@/services';

export const ContactForm = () => {
  const form = useForm<ContactFormSchemaValues>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormSchemaValues> = async (
    data: ContactFormSchemaValues,
  ) => {
    try {
      const res = await messageService.sendMessage(data);

      if (res.success) {
        form.reset();
        toast.success('Message sent successfully!');
      } else {
        form.setError('root', {
          message: res.message || 'Something went wrong',
        });
      }
    } catch (e) {
      form.setError('root', {
        message: e instanceof Error ? e.message : 'Something went wrong',
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="shadow-primary/50 border-border mx-auto flex w-full max-w-130 flex-col gap-4 self-start rounded-md border p-10 shadow-2xl"
      >
        <h3 className="text-center text-2xl font-semibold">Get in Touch</h3>
        <TextInputField
          control={form.control}
          name="name"
          label="Name"
          type="text"
        />
        <TextInputField
          control={form.control}
          name="email"
          label="Your Email"
          type="email"
        />
        <TextAreaField
          control={form.control}
          name="message"
          label="Message"
          className="h-30 min-h-12"
        />
        {form.formState.errors.root?.message && (
          <p className="text-destructive bg-destructive/10 rounded-md px-3 py-2">
            {form.formState.errors.root?.message}
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          className="flex items-center gap-2 text-lg"
        >
          <Send
            size={ICON_SIZES.LG}
            strokeWidth={ICON_STROKE_WIDTH}
          />
          Send
        </Button>
      </form>
    </Form>
  );
};
