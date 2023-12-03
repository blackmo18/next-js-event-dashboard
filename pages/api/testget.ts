import { NextApiResponse } from "next";

export default function testGet(req,res: NextApiResponse) {
    res.send('hello')
}