// Renders JSON-LD directly into the server HTML (not via next/script),
// so crawlers that do not execute JavaScript still see the structured data.
type JsonLdProps = {
  data: string | object;
  id?: string;
};

const JsonLd = ({ data, id }: JsonLdProps) => {
  const json = typeof data === "string" ? data : JSON.stringify(data);
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
};

export default JsonLd;
