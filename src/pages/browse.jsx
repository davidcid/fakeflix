import { useContent } from "../hooks";

export default function Browse() {
  // we need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  // we need slides
  // pass it to the browse container

  return <p>Hello from the browse!</p>;
}
