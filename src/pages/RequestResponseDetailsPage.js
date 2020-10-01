import React from "react";
import RequestDetailsTable from "../components/RequestDetailsTable";
import { dbHostId } from "../constant";

export default function RequestResponseDetailsPage({
  match: {
    params: { hostId },
  },
}) {
  return <RequestDetailsTable hostId={dbHostId} />;
}
