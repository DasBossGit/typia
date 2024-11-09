import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ClassGetter = 
  _test_json_schemas({
    version: "3.0",
    name: "ClassGetter", 
  })(typia.json.schemas<[ClassGetter], "3.0">());