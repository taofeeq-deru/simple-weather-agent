import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { VercelDeployer } from "@mastra/deployer-vercel";
import { LibSQLStore } from "@mastra/libsql";

const storage = new LibSQLStore({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
  id: "mastra-storage"
});

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info"
  }),
  deployer: new VercelDeployer(),
  storage
});
