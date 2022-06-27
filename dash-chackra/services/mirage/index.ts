import { createServer, Model } from "miragejs";

interface UserProps {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserProps>>({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
