import { useObservable } from "rxjs-hooks"
import { switchMap } from "rxjs/operators"
import { fromFetch } from "rxjs/fetch"
import { gpxParser } from "./utils"

export function Main() {

  const state = useObservable(() => fromFetch("/20241221.gpx").pipe(switchMap(response => {
    if (response.ok) {
      return response.text().then(gpxParser)
    } else {
      return Promise.resolve({})
    }
  })), null)

  return (
    <>
      <div>{JSON.stringify(typeof state)}</div>
    </>
  );
}
