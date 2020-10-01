import React from "react";
import DeleteHost from "../components/DeleteHost";
import GenerateHost from "../components/GenerateHost";
import ListRequests from "../components/ListRequests";

export default function LandingPage() {
  return (
    <div>
      <GenerateHost />
      <ListRequests />
      <DeleteHost />
    </div>
  );
}
