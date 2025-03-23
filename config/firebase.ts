import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// Load Firebase credentials from environment variable
const firebaseConfig = process.env.FIREBASE_CONFIG;

if (!firebaseConfig) {
    throw new Error("Missing FIREBASE_CONFIG environment variable");
}

// Decode the base64 string
const serviceAccount = JSON.parse(Buffer.from(firebaseConfig, "base64").toString("utf-8"));

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

const db = admin.firestore();
export default db;
