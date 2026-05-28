import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lazy initialization of Supabase client
let supabase: any = null;
function getSupabase() {
  if (!supabase) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;
    if (!url || !key) {
      return null;
    }
    supabase = createClient(url, key);
  }
  return supabase;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Inquiry submission
  app.post("/api/inquiry", async (req, res) => {
    const { name, contact, message, projectType } = req.body;
    console.log("New Inquiry Received:", { name, contact, message, projectType });
    
    const client = getSupabase();
    if (client) {
      try {
        const { error } = await client
          .from("inquiries")
          .insert([
            { 
              name, 
              contact, 
              message, 
              project_type: projectType,
              created_at: new Date().toISOString()
            }
          ]);
        
        if (error) {
          console.error("Supabase Error:", error);
          // We still return success to the user but log the error
          // Or we could return an error if persistence is critical
        }
      } catch (err) {
        console.error("Supabase connection error:", err);
      }
    }
    
    res.json({ 
      success: true, 
      message: "문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다." 
    });
  });

  // API Route: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
