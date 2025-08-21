import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { VercelDeployer } from "@mastra/deployer-vercel";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info"
  }),
  deployer: new VercelDeployer()
});
