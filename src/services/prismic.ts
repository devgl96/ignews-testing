import * as Prismic from "@prismicio/client";

export function getPrismicClient(ref?: string) {
  const endpoint = Prismic.getEndpoint("ignewsgl");

  const prismic = Prismic.createClient(
    endpoint,
    {
      ref,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  );

  return prismic;
}