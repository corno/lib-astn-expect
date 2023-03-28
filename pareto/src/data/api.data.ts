import * as pd from 'pareto-core-data'

import { constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        // "expectDictionary": algorithm(sconstructor("this", {}, "ExpectDictionary")),
        // "expectList": algorithm(sconstructor("this", {}, "ExpectList")),
        "createExpectArray": algorithm(constructor("this", {}, "CreateExpectArray"), { "Annotation": "Annotation" }),
        "createExpectArrayOrObject": algorithm(constructor("this", {}, "CreateExpectArrayOrObject"), { "Annotation": "Annotation" }),
        "createExpectObject": algorithm(constructor("this", {}, "CreateExpectObject"), { "Annotation": "Annotation" }),
        "createExpectMultilineString": algorithm(constructor("this", {}, "CreateExpectMultilineString"), { "Annotation": "Annotation" }),
        "createExpectSimpleString": algorithm(constructor("this", {}, "CreateExpectSimpleString"), { "Annotation": "Annotation" }),
        "createExpectTaggedUnion": algorithm(constructor("this", {}, "CreateExpectTaggedUnion"), { "Annotation": "Annotation" }),
        // "createExpectArray": algorithm(constructor("this", {}, "CreateExpectArray"), { "Annotation": "Annotation" }),
        // "createExpectArray": algorithm(constructor("this", {}, "CreateExpectArray"), { "Annotation": "Annotation" }),
        // "createExpectArray": algorithm(constructor("this", {}, "CreateExpectArray"), { "Annotation": "Annotation" }),
        // "expectArrayOrObject": algorithm(sconstructor("this", {}, "ExpectArrayOrObject")),
        // "expectObject": algorithm(sconstructor("this", {}, "ExpectObject")),
        // "expectMultilineString": algorithm(sconstructor("this", {}, "ExpectMultilineString")),
        // "expectSimpleString": algorithm(sconstructor("this", {}, "ExpectSimpleString")),
        // "expectQuotedString": algorithm(sconstructor("this", {}, "ExpectQuotedString")),
        // "expectApostrophedString": algorithm(sconstructor("this", {}, "ExpectApostrophedString")),
        // "expectTaggedUnion": algorithm(sconstructor("this", {}, "ExpectTaggedUnion")),
        "createUnexpectedValueHandler": algorithm(constructor("this", {}, "CreateUnexpectedValueHandler"), { "Annotation": "Annotation" }),
    }),
}
