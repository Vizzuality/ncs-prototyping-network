/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import sendgridClient from '@sendgrid/client';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY_SUBSCRIPTION);

const Contact = (req: NextApiRequest, res: NextApiResponse): void => {
  console.log('API CONTACT');
  if (req.method === 'PUT') {
    const { email, name } = req.body;

    const data = {
      list_ids: ['14bf6def-dfd3-4f02-82da-08b3ee32b036'],
      contacts: [
        {
          name,
          email,
        },
      ],
    };

    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT' as const,
      body: data,
    };

    sendgridClient.request(request).then(
      () => {
        res.status(200).json({ status: 'success' });
      },
      (error: { response?: Response }) => {
        if (error.response) {
          res.status(400).json(error.response.body);
        }
      }
    );
  } else {
    res.status(404).send(null);
  }
};

export default Contact;
