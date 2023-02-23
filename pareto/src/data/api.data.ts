import * as pd from 'pareto-core-data'

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': glossary,
    'api': {
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'algorithms': d({
            "expectDictionary": algorithm(definitionReference("ExpectDictionary")),
            "expectList": algorithm(definitionReference("ExpectList")),
            "expectArray": algorithm(definitionReference("ExpectArray")),
            "expectArrayOrObject": algorithm(definitionReference("ExpectArrayOrObject")),
            "expectObject": algorithm(definitionReference("ExpectObject")),
            "expectMultilineString": algorithm(definitionReference("ExpectMultilineString")),
            "expectSimpleString": algorithm(definitionReference("ExpectSimpleString")),
            "expectQuotedString": algorithm(definitionReference("ExpectQuotedString")),
            "expectApostrophedString": algorithm(definitionReference("ExpectApostrophedString")),
            "expectTaggedUnion": algorithm(definitionReference("ExpectTaggedUnion")),
            "createUnexpectedHandler": algorithm(definitionReference("CreateUnexpectedHandler")),
        })
    },
}
