// pages/api/classifier.js
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY, // Use an environment variable for the API key
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const classify = await cohere.classify({
                examples: [
                    // ... your examples here
                ],
                inputs: req.body.inputs, // Assume inputs are provided in the request body
            });

            res.status(200).json(classify);
        } catch (error) {
            console.error('Error with Cohere classify:', error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}