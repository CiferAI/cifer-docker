const apiURL = "https://api.cifer.ai/";
const rpcURL = "https://cif_node.cifer.ai";
const prefix = import.meta.env.VITE_ADDRESS_PREFIX ?? "cosmos";

export const env = {
  apiURL,
  rpcURL,
  prefix,
};
