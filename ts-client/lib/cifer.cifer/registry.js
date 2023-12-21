import { Params } from "./types/cifer/cifer/params";
import { MsgUpdateParamsResponse } from "./types/cifer/cifer/tx";
import { MsgUpdateParams } from "./types/cifer/cifer/tx";
import { GenesisState } from "./types/cifer/cifer/genesis";
import { QueryParamsRequest } from "./types/cifer/cifer/query";
import { QueryParamsResponse } from "./types/cifer/cifer/query";
const msgTypes = [
    ["/cifer.cifer.Params", Params],
    ["/cifer.cifer.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cifer.cifer.MsgUpdateParams", MsgUpdateParams],
    ["/cifer.cifer.GenesisState", GenesisState],
    ["/cifer.cifer.QueryParamsRequest", QueryParamsRequest],
    ["/cifer.cifer.QueryParamsResponse", QueryParamsResponse],
];
export { msgTypes };
