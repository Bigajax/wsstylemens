import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const BASE = "https://wsstylemens.com.br"; // ajustar quando o domínio for definido

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = ["", "/catalogo", "/novidades", "/ofertas", "/looks", "/marcas", "/sobre", "/contato"].map(
    (p) => ({ url: `${BASE}${p}`, lastModified: new Date() })
  );
  const produtos = products.map((p) => ({
    url: `${BASE}/produto/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...paginas, ...produtos];
}
