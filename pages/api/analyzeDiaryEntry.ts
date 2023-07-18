import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { entry } = req.body;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt:
            "please give a short analysis on the contents of this diary entry as if you were an empathetic, listening friend and give insights on how they are feeling: " +
            entry,
          max_tokens: 120, // this can be adjusted based on your needs,
          temperature: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );
      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(response.status).json({ message: "OpenAI API error" });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(400).json({ message: "Only POST requests are allowed" });
  }
}
