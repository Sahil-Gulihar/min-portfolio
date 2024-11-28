import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Toast({ title, description, onClose }: { title: string; description: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded-md shadow-lg z-50"
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm">{description}</p>
      <button
        onClick={onClose}
        className="mt-2 text-sm text-blue-400 underline focus:outline-none"
      >
        Close
      </button>
    </motion.div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ title: string; description: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
    setIsSubmitting(false);

    setToast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <Input
          {...register('name', { required: 'Name is required' })}
          placeholder="Your Name"
          className="bg-background"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

        <Input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          placeholder="Your Email"
          className="bg-background"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

        <Textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Your Message"
          className="bg-background"
          rows={4}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.form>

      {toast && (
        <Toast
          title={toast.title}
          description={toast.description}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
