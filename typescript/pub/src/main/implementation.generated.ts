import { API } from "./definition/api.generated"
import { $$ as icreateUnexpectedHandler } from "./implementations/createUnexpectedHandler.p"
import { $$ as iexpectApostrophedString } from "./implementations/expectApostrophedString.p"
import { $$ as iexpectArray } from "./implementations/expectArray.p"
import { $$ as iexpectArrayOrObject } from "./implementations/expectArrayOrObject.p"
import { $$ as iexpectDictionary } from "./implementations/expectDictionary.p"
import { $$ as iexpectList } from "./implementations/expectList.p"
import { $$ as iexpectMultilineString } from "./implementations/expectMultilineString.p"
import { $$ as iexpectObject } from "./implementations/expectObject.p"
import { $$ as iexpectQuotedString } from "./implementations/expectQuotedString.p"
import { $$ as iexpectSimpleString } from "./implementations/expectSimpleString.p"
import { $$ as iexpectTaggedUnion } from "./implementations/expectTaggedUnion.p"

export const $a: API = {
    'createUnexpectedHandler': icreateUnexpectedHandler,
    'expectApostrophedString': iexpectApostrophedString,
    'expectArray': iexpectArray,
    'expectArrayOrObject': iexpectArrayOrObject,
    'expectDictionary': iexpectDictionary,
    'expectList': iexpectList,
    'expectMultilineString': iexpectMultilineString,
    'expectObject': iexpectObject,
    'expectQuotedString': iexpectQuotedString,
    'expectSimpleString': iexpectSimpleString,
    'expectTaggedUnion': iexpectTaggedUnion,
}