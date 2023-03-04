import * as pd from 'pareto-core-data'

import { functionReference, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "expectDictionary": algorithm(functionReference("this", {}, "ExpectDictionary")),
        "expectList": algorithm(functionReference("this", {}, "ExpectList")),
        "expectArray": algorithm(functionReference("this", {}, "ExpectArray")),
        "expectArrayOrObject": algorithm(functionReference("this", {}, "ExpectArrayOrObject")),
        "expectObject": algorithm(functionReference("this", {}, "ExpectObject")),
        "expectMultilineString": algorithm(functionReference("this", {}, "ExpectMultilineString")),
        "expectSimpleString": algorithm(functionReference("this", {}, "ExpectSimpleString")),
        "expectQuotedString": algorithm(functionReference("this", {}, "ExpectQuotedString")),
        "expectApostrophedString": algorithm(functionReference("this", {}, "ExpectApostrophedString")),
        "expectTaggedUnion": algorithm(functionReference("this", {}, "ExpectTaggedUnion")),
        "createUnexpectedHandler": algorithm(functionReference("this", {}, "CreateUnexpectedHandler")),
    })
}
