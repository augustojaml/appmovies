import { NextApiRequest, NextApiResponse } from 'next';
import { genres } from './_fake/fakeGenres';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    return response.status(200).json(genres);
  }
};
