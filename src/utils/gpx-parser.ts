import { gpx } from "@tmcw/togeojson"

export const gpxParser = (content: string) => {
  return gpx(new DOMParser().parseFromString(content, "text/xml"))
}