'use client';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import { Form, Field, FormProps } from 'react-final-form';
import Markdown from 'react-markdown';

import { AnimatePresence, motion } from 'framer-motion';
import { useSetRecoilState } from 'recoil';
import remarkGfm from 'remark-gfm';

import { headerStyleAtom } from '@/store';

import { useGetMessages } from '@/types/generated/message';

import { useSyncLocale } from '@/hooks/query/sync-query';

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
  const [locale] = useSyncLocale();
  const setHeaderStyle = useSetRecoilState(headerStyleAtom);

  const { data: dataMessages, isFetched: messagesIsFetched } = useGetMessages({
    populate: '*',
    locale,
  });

  const messages = messagesIsFetched && dataMessages.data.data[0].attributes;

  useEffect(() => {
    setHeaderStyle('dark');
  }, [setHeaderStyle]);

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        <Wrapper className="!px-56 py-20">
          <h4 className="pt-20 font-serif text-4xl font-semibold text-indigo">
            {messages.contact_us}
          </h4>
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="pt-3 text-xl font-light leading-8 text-text"
          >
            {messages.contact_us_description}
          </Markdown>

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
                          <label className="text-xl font-light text-text">
                            {messages.contact_us_name_title}
                          </label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder={messages.contact_us_name_placeholder}
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
                          <label className="text-xl font-light text-text">
                            {messages.contact_us_surname_title}
                          </label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder={messages.contact_us_surname_placeholder}
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
                          <label className="text-xl font-light text-text">
                            {messages.contact_us_email_title}
                          </label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder={messages.contact_us_email_placeholder}
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
                          <label className="text-xl font-light text-text">
                            {messages.contact_us_subject_title}
                          </label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder={messages.contact_us_subject_placeholder}
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
                            <label className="text-xl font-light text-text">
                              {messages.contact_us_message_title}
                            </label>
                            <textarea
                              {...input}
                              placeholder={messages.contact_us_message_placeholder}
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
                        {messages.contact_us_copy}
                      </label>
                    </div>

                    <div className="pt-2">
                      <Button type="submit">
                        <p className="text-base font-bold uppercase">{messages.send_caption}</p>
                      </Button>
                    </div>
                  </div>
                </form>
              );
            }}
          </Form>
        </Wrapper>
        <Toaster />
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPage;
