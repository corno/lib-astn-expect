import { API } from "./api.generated"
import { $$ as icreateExpectArray } from "./implementations/createExpectArray.a.c"
import { $$ as icreateExpectArrayOrObject } from "./implementations/createExpectArrayOrObject.a.c"
import { $$ as icreateExpectMultilineString } from "./implementations/createExpectMultilineString.a.c"
import { $$ as icreateExpectObject } from "./implementations/createExpectObject.a.c"
import { $$ as icreateExpectSimpleString } from "./implementations/createExpectSimpleString.a.c"
import { $$ as icreateExpectTaggedUnion } from "./implementations/createExpectTaggedUnion.a.c"
import { $$ as icreateUnexpectedValueHandler } from "./implementations/createUnexpectedValueHandler.a.c"

export const $api: API = {
    'createExpectArray': icreateExpectArray,
    'createExpectArrayOrObject': icreateExpectArrayOrObject,
    'createExpectMultilineString': icreateExpectMultilineString,
    'createExpectObject': icreateExpectObject,
    'createExpectSimpleString': icreateExpectSimpleString,
    'createExpectTaggedUnion': icreateExpectTaggedUnion,
    'createUnexpectedValueHandler': icreateUnexpectedValueHandler,
}