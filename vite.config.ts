import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    allowedHosts: ["app1.payday.vn", "localhost", "127.0.0.1"],
    headers: {
      "Content-Security-Policy":
        "frame-src 'self' http://tingbox.payday.vn:8100 https://tingbox.payday.vn:8100; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://tingbox.payday.vn:8100 https://tingbox.payday.vn:8100; object-src 'none';",
    },
  },
});
