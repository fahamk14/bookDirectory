export const getViewableLink = (formats: any) => {
  if (formats["text/html"]) return formats["text/html"];
  if (formats["application/pdf"]) return formats["application/pdf"];
  if (formats["text/plain"]) return formats["text/plain"];
  return null;
};
