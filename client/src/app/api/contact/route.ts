/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { NextResponse } from 'next/server';

import sendgridClient from '@sendgrid/client';

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY_SUBSCRIPTION);

export async function PUT(req: Request) {
  const body: Record<string, string> = await req.json();

  const copy = body.copy ? 'Yes' : 'No';

  const { email, first_name, last_name, message, subject } = body;

  const data = {
    list_ids: ['14bf6def-dfd3-4f02-82da-08b3ee32b036'],
    contacts: [
      {
        first_name,
        last_name,
        email,
        custom_fields: { e9_T: message, e10_T: subject, e12_T: copy },
      },
    ],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT' as const,
    body: data,
  };

  const res = await sendgridClient.request(request);
  return NextResponse.json({ res });
}
