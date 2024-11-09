import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectInternal = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectInternal",
  })(typia.llm.schema<ObjectInternal, "chatgpt">());