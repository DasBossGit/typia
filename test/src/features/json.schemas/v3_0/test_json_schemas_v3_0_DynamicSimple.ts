import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_DynamicSimple = 
  _test_json_schemas({
    version: "3.0",
    name: "DynamicSimple", 
  })(typia.json.schemas<[DynamicSimple], "3.0">());