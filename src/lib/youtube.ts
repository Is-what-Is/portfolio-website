const ID_PATTERN = /^[\w-]{11}$/;

/** Accepts a bare video ID or any common YouTube URL and returns the ID. */
export function getYouTubeId(idOrUrl: string): string | undefined {
  if (ID_PATTERN.test(idOrUrl)) return idOrUrl;
  try {
    const url = new URL(idOrUrl);
    const candidate =
      url.searchParams.get("v") ?? url.pathname.split("/").filter(Boolean).pop();
    return candidate && ID_PATTERN.test(candidate) ? candidate : undefined;
  } catch {
    return undefined;
  }
}
