import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  ceremonyType: z.enum(['wedding', 'umembeso', 'both', 'corporate', 'other'], {
    message: 'Please select a ceremony type',
  }),
  date: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  package: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const CEREMONY_OPTIONS = [
  { value: 'wedding', label: 'White Wedding' },
  { value: 'umembeso', label: 'Umembeso / Traditional' },
  { value: 'both', label: 'Both (2-Day Union)' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'other', label: 'Other' },
] as const;
