import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Hello from API");
    res.status(200).json({ message: "Hello World" });
};