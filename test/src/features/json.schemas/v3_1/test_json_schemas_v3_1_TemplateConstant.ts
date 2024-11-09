import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TemplateConstant = 
  _test_json_schemas({
    version: "3.1",
    name: "TemplateConstant", 
  })(typia.json.schemas<[TemplateConstant], "3.1">());