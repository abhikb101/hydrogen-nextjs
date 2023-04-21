import { Timestamp } from 'firebase/firestore';
import { firestore } from "@lib/firestore";
import {
  setDoc,
  doc
} from "@firebase/firestore";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const body = req.body;
  const timestamp = Date.now().toString();
  const docRef = doc(firestore, "confessions", `${timestamp}`)

  
  const data = {
    title: body.title,
    body: body.body,
    approved: false,
    date: Timestamp.now(),
    zolo: body.zolo || "",
  };
  setDoc(docRef, data)

  res.status(200).json({ name: "John Doe" });
}
