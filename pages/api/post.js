export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const body = req.body;
  console.log(body);
  res.status(200).json({ name: "John Doe" });
}
