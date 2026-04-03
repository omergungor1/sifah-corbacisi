import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();
  const paths = ["", "/menu", "/hakkimizda", "/iletisim"];
  return paths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
