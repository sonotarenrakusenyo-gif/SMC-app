import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { generateVocabExampleAi } from "./vocabAiGemini";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "48kb" }));

  app.post("/api/vocab-example-ai", async (req, res) => {
    try {
      const body = req.body as { word?: string; meaning?: string; originalExample?: string };
      const word = typeof body.word === "string" ? body.word.trim() : "";
      const meaning = typeof body.meaning === "string" ? body.meaning.trim() : "";
      const originalExample =
        typeof body.originalExample === "string" ? body.originalExample.trim() : "";
      if (!word || !meaning) {
        res.status(400).json({ error: "word and meaning are required" });
        return;
      }
      const result = await generateVocabExampleAi({ word, meaning, originalExample });
      res.json(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      const status = msg.includes("GEMINI_API_KEY") ? 503 : 500;
      res.status(status).json({ error: msg });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
