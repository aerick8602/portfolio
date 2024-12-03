"use client";

import { Provider } from "react-redux";
import { Filestore } from "./filestore";

export function FileProvider({ children }) {
  return <Provider store={Filestore}>{children}</Provider>;
}
