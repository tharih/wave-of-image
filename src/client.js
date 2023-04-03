
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "xg3ihi80",
  dataset: "production",
  apiVersion: "2022-11-15",
  useCdn: true,
  token: "skPUtOTJ6onrCkF43JI4d8D6y2bmzJMa2aqMj2AKE7ELDeYcCOBdw6ctXsBQwgqgKy0WlPTgbAyPT2CJXi81Vbt6sR3TTg4oDuAEIeMqaJGlWeyPSdfbReYzY5Hy8cL5bdkjTwWIV7Sklmz2n8s6ES5Qw8hZFBbMr4AXaWry5kILzcGTIP7Q",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
