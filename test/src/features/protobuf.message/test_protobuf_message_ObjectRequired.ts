import typia from "typia";
import { ObjectRequired } from "../../structures/ObjectRequired";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectRequired = _test_protobuf_message(
  "ObjectRequired",
)(typia.protobuf.message<ObjectRequired>());