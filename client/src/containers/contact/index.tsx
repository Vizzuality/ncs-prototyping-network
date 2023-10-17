'use client';
import React, { useCallback, useMemo, useRef } from 'react';

import { Form, Field, FormProps } from 'react-final-form';

import { Toaster } from '@/components/ui/toaster';

import { composeValidators } from 'components/forms/validations';
import Button from 'components/ui/button';
import { useToast } from 'components/ui/use-toast';
import Wrapper from 'containers/wrapper';
import { useSaveContact } from 'hooks/contact';
import { cn } from 'utils/cn';

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
  copy?: boolean;
}

const ContactPage = (): JSX.Element => {
  const formRef = useRef(null);
  const { toast } = useToast();

  const saveContactMutation = useSaveContact();

  const INITIAL_VALUES = useMemo(() => {
    return {
      first_name: null,
      last_name: null,
      email: null,
      subject: null,
      message: null,
      copy: false,
    };
  }, []);

  const onSubmit = useCallback(
    (data: FormValues, form: FormProps['form']) => {
      saveContactMutation.mutate(
        {
          data,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Your message has been sent',
              description: "We'll be in touch soon.",
            });

            form.reset();
          },
          onError: () => {
            toast({
              title: 'Something went wrong',
              description: 'Please try again later.',
            });
          },
        }
      );
    },
    [saveContactMutation, toast]
  );

  return (
    <>
      <Wrapper className="mx-auto max-w-4xl py-20">
        <h4 className="pt-20 font-serif text-4xl font-semibold text-indigo">Contact Us</h4>
        <p className="pt-3 text-xl font-light leading-8 text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <Form initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
          {({ handleSubmit, form }) => {
            formRef.current = form;

            const isError = (error: unknown) => form.getState().submitFailed && error;

            return (
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              <form noValidate onSubmit={handleSubmit}>
                <div className="mt-10 flex w-full flex-col justify-between space-y-6">
                  <Field
                    name="first_name"
                    component="input"
                    validate={composeValidators([{ presence: true }])}
                  >
                    {({ input, meta }) => (
                      <div className="relative w-full space-y-2">
                        <label className="text-xl font-light text-text">Given name *</label>
                        <input
                          {...input}
                          value={input.value as string}
                          placeholder="Your first name or given name"
                          type="text"
                          className={cn({
                            'focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset':
                              true,
                            'ring-2 ring-red-500 focus:ring-red-500': isError(meta.error),
                          })}
                        />
                      </div>
                    )}
                  </Field>

                  <Field
                    name="last_name"
                    component="input"
                    validate={composeValidators([{ presence: true }])}
                  >
                    {({ input, meta }) => (
                      <div className="relative w-full space-y-2">
                        <label className="text-xl font-light text-text">Surname *</label>
                        <input
                          {...input}
                          value={input.value as string}
                          placeholder="Your surname or family name(s)"
                          type="text"
                          className={cn({
                            'focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset':
                              true,
                            'ring-2 ring-red-500 focus:ring-red-500': isError(meta.error),
                          })}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    name="email"
                    component="input"
                    validate={composeValidators([{ presence: true, email: true }])}
                  >
                    {({ input, meta }) => (
                      <div className="relative w-full space-y-2">
                        <label className="text-xl font-light text-text">Email</label>
                        <input
                          {...input}
                          value={input.value as string}
                          placeholder="Your email address"
                          type="email"
                          className={cn({
                            'focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset':
                              true,
                            'ring-2 ring-red-500 focus:ring-red-500': isError(meta.error),
                          })}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    name="subject"
                    component="input"
                    validate={composeValidators([{ presence: true }])}
                  >
                    {({ input, meta }) => (
                      <div className="relative w-full space-y-2">
                        <label className="text-xl font-light text-text">Subject *</label>
                        <input
                          {...input}
                          value={input.value as string}
                          placeholder="Enter your subject"
                          type="text"
                          className={cn({
                            'focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset':
                              true,
                            'ring-2 ring-red-500 focus:ring-red-500': isError(meta.error),
                          })}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    name="message"
                    component="input"
                    validate={composeValidators([{ presence: true }])}
                  >
                    {({ input, meta }) => {
                      return (
                        <div className="relative w-full space-y-2">
                          <label className="text-xl font-light text-text">Message *</label>
                          <textarea
                            {...input}
                            placeholder="Enter your message"
                            value={input.value as string}
                            rows={4}
                            className={cn({
                              'focus:ring-brand-700 flex h-40 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset':
                                true,
                              'ring-2 ring-red-500 focus:ring-red-500': isError(meta.error),
                            })}
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <div className="flex items-center space-x-4">
                    <Field
                      name="copy"
                      component="input"
                      type="checkbox"
                      format={(v) => v === true}
                      parse={(v) => (v ? true : false)}
                    />
                    <label className="text-base text-text" htmlFor="copy">
                      I’d like to receive an email copy of my message
                    </label>
                  </div>

                  <div className="pt-2">
                    <Button type="submit">
                      <p className="text-base font-bold uppercase">Send</p>
                    </Button>
                  </div>
                </div>
              </form>
            );
          }}
        </Form>
      </Wrapper>
      <Toaster />
    </>
  );
};

export default ContactPage;
