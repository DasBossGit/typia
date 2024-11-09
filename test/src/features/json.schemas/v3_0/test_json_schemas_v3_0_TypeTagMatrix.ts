import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_TypeTagMatrix = 
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagMatrix", 
  })(typia.json.schemas<[TypeTagMatrix], "3.0">());