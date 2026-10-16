import { APP } from "./App";
import type { Metadata } from "next";

export interface Data {
  meta : {
    title : string;
    desc : string;
  },
  path : string;
  image : {
    path : string,
    alt : string
  },
  // OpenGraph locale, e.g. "en_AE" (default) or "ar_AE"
  locale? : string;
  // hreflang alternates, e.g. { en: `${APP.url}/...`, ar: `${APP.url}/...` }
  languages? : Record<string, string>;
}

export default  function MetadataTemplate({data}: {
  data : Data;
}):Metadata {

  return {
    title: data.meta.title,
    description: data.meta.desc,
    alternates: {
      canonical: `${APP.url}${data.path}`,
      ...(data.languages ? { languages: data.languages } : {}),
    },
    openGraph: {
      url: `${APP.url}${data.path}`,
      title: data.meta.title,
      images: [{url : `${APP.url}${data.image.path}`, alt : data.image.alt}],
      description: data.meta.desc,
      type: "website",
      locale: data.locale ?? "en_AE",
      countryName: "United Arab Emirates",
      phoneNumbers: [APP.phone],
      siteName: APP.name,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}
