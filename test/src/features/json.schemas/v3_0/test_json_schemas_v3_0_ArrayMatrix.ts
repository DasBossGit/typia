import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayMatrix = 
  _test_json_schemas({
    version: "3.0",
    name: "ArrayMatrix", 
  })(typia.json.schemas<[ArrayMatrix], "3.0">());