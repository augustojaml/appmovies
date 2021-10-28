import { NextApiRequest, NextApiResponse } from 'next';
import { movies } from './_fake/fakeMovies';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    return response.status(200).json(movies);
  }
};
