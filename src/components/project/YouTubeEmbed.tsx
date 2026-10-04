import { getYouTubeId } from "../../lib/youtube";

/** Responsive 16:9 embed. Space is reserved up front, so nothing shifts on load. */
export function YouTubeEmbed({
  video,
  title,
}: {
  /** Video ID or URL, from the project record. */
  video: string;
  title: string;
}) {
  const id = getYouTubeId(video);
  if (!id) return null;

  return (
    <div className="aspect-video w-full bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full border-0"
      />
    </div>
  );
}
