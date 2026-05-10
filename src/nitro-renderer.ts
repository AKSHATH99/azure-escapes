import { fetchViteEnv } from "nitro/vite/runtime";

export default function nitroRenderer({ req }: { req: Request }) {
  return fetchViteEnv("ssr", req);
}
