import { useParams } from "@remix-run/react";

export default function DynamicParamRoute() {
  const { id } = useParams();
  return <div>This is a route that has dynamic id - {id}</div>;
}
