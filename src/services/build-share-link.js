export default function buildShareLink(encodedBuild) {
  let baseUrl = window.location.origin + window.location.pathname;
  if (!baseUrl.endsWith("/")) baseUrl += "/";
  return `${baseUrl}#/${encodedBuild}`;
}
