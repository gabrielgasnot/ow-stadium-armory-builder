export default function buildShareLink(encodedBuild: string): string {
  let baseUrl = window.location.origin + window.location.pathname;
  if (!baseUrl.endsWith("/")) baseUrl += "/";
  return `${baseUrl}#/${encodedBuild}`;
}
