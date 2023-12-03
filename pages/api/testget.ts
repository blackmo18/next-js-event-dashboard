import { NextApiResponse } from "next";

export default function testGet(_,res: NextApiResponse) {
    res.send('hello')
}