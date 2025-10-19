import Fastify from "fastify";
import cors from "@fastify/cors";
import { register } from "module";
import { routes } from "./routes";

const app = Fastify({ logger: true });

await app.register(cors);
await app.register(routes);

const start = async () => {
  try {
    await app.listen({ port: 3333 });
    console.log("to aqui");
  } catch (err) {
    process.exit(1);
  }
};

start();
