import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ToJsonUnion = 
  _test_json_schemas({
    version: "3.0",
    name: "ToJsonUnion", 
  })(typia.json.schemas<[ToJsonUnion], "3.0">());