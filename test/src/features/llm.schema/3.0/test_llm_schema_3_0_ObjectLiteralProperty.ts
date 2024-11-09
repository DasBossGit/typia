import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectLiteralProperty = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectLiteralProperty",
  })(typia.llm.schema<ObjectLiteralProperty, "3.0">());