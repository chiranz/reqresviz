import React from "react";
import RequestDetailsTable from "../components/RequestDetailsTable";

export default function RequestResponseDetailsPage({
  match: {
    params: { uid },
  },
}) {
  return <RequestDetailsTable />;
}
