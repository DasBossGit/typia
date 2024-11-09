import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ToJsonAtomicUnion = 
  _test_json_schemas({
    version: "3.1",
    name: "ToJsonAtomicUnion", 
  })(typia.json.schemas<[ToJsonAtomicUnion], "3.1">());