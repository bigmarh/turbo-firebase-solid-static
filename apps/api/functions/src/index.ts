import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";

initializeApp();

export const helloWorld = onRequest((req, res) => {
  res.status(200).json({ message: "Hello from Firebase Functions (Turborepo)!" });
});


