import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Nicholas'},
        {id: 2, name: 'Raíssa'},
        {id: 3, name: 'Tharsus'},
    ]

    return response.json(users);
}