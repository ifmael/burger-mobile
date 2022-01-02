// import { useState } from "react";

// Graphql
import { useQuery } from "@apollo/client";

import FETCH_DATA from "../../graphql/querys/data";
import { AppData } from "./Global.types";

const useData = () => {
    const { loading, error, data } = useQuery<AppData>(FETCH_DATA, { fetchPolicy: "no-cache" });

    return { loading, error, data };
};

export default useData;
