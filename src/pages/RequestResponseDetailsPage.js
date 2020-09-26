import Axios from "axios";
import React, { useEffect, useState } from "react";
import RequestDetailsTable from "../components/RequestDetailsTable";
import { dbHostId } from "../constant";

export default function RequestResponseDetailsPage({
  match: {
    params: { hostId },
  },
}) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await Axios.get(`/generate-host/${dbHostId}?page=1&limit=5`);
      const { data } = res;
      const result = [];
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        const currData = data[i];
        let {
          type,
          response,
          reqpath,
          response: { statusCode },
          timestamps,
          header,
          queryParams,
        } = currData;
        const formattedData = {
          type,
          response,
          reqpath,
          statusCode,
          timestamps,
          header,
          queryParams,
        };
        result.push(formattedData);
      }
      setTableData(result);
    };
    loadData();
  }, [hostId]);
  return <RequestDetailsTable tableData={tableData} />;
}
