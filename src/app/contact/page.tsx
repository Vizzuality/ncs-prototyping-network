'use client';
import React, { useCallback, useMemo, useRef } from 'react';

import { Form, Field } from 'react-final-form';

import { type NextPage } from 'next';

import Wrapper from 'containers/wrapper';

import Layout from 'app/layout';
import { composeValidators } from 'components/forms/validations';
import Button from 'components/ui/button';

const Contact: NextPage = () => {
  const formRef = useRef(null);

  const INITIAL_VALUES = useMemo(() => {
    return {
      name: '',
      surname: '',
      email: '',
      subject: '',
      message: '',
      copy: false,
    };
  }, []);

  const onSubmit = useCallback((data) => {
    console.info('form data', data);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <div className="mx-auto mt-40 max-w-4xl border py-20">
          <h4 className="pt-20 font-serif text-4xl font-semibold text-indigo">Contact Us</h4>
          <p className="pt-3 text-xl font-light leading-8 text-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <Form initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
            {({ handleSubmit, form }) => {
              formRef.current = form;

              return (
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                <form noValidate onSubmit={handleSubmit}>
                  <div className="mt-10 flex w-full flex-col justify-between space-y-6">
                    <Field
                      name="name"
                      component="input"
                      validate={composeValidators([{ presence: true }])}
                    >
                      {({ input }) => (
                        <div className="relative w-full space-y-2">
                          <label className="text-xl font-light text-text">Given name *</label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder="Your first name or given name"
                            type="email"
                            className="focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset"
                          />
                        </div>
                      )}
                    </Field>

                    <Field
                      name="surname"
                      component="input"
                      validate={composeValidators([{ presence: true }])}
                    >
                      {({ input }) => (
                        <div className="relative w-full space-y-2">
                          <label className="text-xl font-light text-text">Surname *</label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder="Your surname or family name(s)"
                            type="email"
                            className="focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset"
                          />
                        </div>
                      )}
                    </Field>
                    <Field
                      name="email"
                      component="input"
                      validate={composeValidators([{ presence: true, email: true }])}
                    >
                      {({ input }) => (
                        <div className="relative w-full space-y-2">
                          <label className="text-xl font-light text-text">Email</label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder="Your email address"
                            type="email"
                            className="focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset"
                          />
                        </div>
                      )}
                    </Field>
                    <Field
                      name="subject"
                      component="input"
                      validate={composeValidators([{ presence: true }])}
                    >
                      {({ input }) => (
                        <div className="relative w-full space-y-2">
                          <label className="text-xl font-light text-text">Subject *</label>
                          <input
                            {...input}
                            value={input.value as string}
                            placeholder="Enter your subject"
                            type="text"
                            className="focus:ring-brand-700 flex h-16 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset"
                          />
                        </div>
                      )}
                    </Field>
                    <Field
                      name="message"
                      component="input"
                      validate={composeValidators([{ presence: true }])}
                    >
                      {({ input }) => {
                        return (
                          <div className="relative w-full space-y-2">
                            <label className="text-xl font-light text-text">Message *</label>
                            <textarea
                              {...input}
                              placeholder="Enter your message"
                              value={input.value as string}
                              rows={4}
                              className="focus:ring-brand-700 flex h-40 w-full border-none bg-background py-4 px-6 text-lg text-text transition duration-300 delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset"
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
                      <Button
                        disabled={!form.getState().valid}
                        type="submit"
                        className="flex h-14 rounded-none bg-butternut px-20 uppercase"
                      >
                        <p>Send</p>
                      </Button>
                    </div>
                  </div>
                </form>
              );
            }}
          </Form>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Contact;
