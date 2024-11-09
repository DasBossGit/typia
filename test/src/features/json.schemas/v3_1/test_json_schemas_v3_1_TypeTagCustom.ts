import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TypeTagCustom = 
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagCustom", 
  })(typia.json.schemas<[TypeTagCustom], "3.1">());