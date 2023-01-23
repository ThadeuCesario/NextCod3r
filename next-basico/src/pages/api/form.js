/* eslint-disable import/no-anonymous-default-export */

const users = [];

export default function (req, resp) {
  if (req.method === "POST") {
    users.push(req.body);
    return resp.status(200).send("User added");
  }

  if (req.method === "GET") {
    return resp.status(200).json(users);
  }

  return resp.status(405).send("Method not allowed");
}
