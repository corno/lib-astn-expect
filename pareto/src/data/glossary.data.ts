import * as pd from 'pareto-core-data'

import { constructor, aInterfaceMethod, aInterfaceReference, externalTypeReference, glossaryParameter, group, imp, member, parametrizedType, ref, taggedUnion, type, typeParameter, typeReference, aExternalInterfaceReference, aInterface } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp(), //FIXME imp({ "Annotation": typeReference("Annotation") }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Annotation": type(ref(glossaryParameter("Annotation"))),
            "Expected": type(taggedUnion({
                "array": group({}),
                "array or object": group({}),
                "multiline string": group({}),
                "object": group({}),
                "simple string": group({}),
                "tagged union": group({}),
            })),
            "UnexpectedValue": parametrizedType({ "Token": null }, group({
                "expected": member(ref(typeReference("Expected"))),
                "token": member(ref(typeParameter("Token"))),
            })),
            "UnexpectedArray": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "OpenArrayToken") }))),
            "UnexpectedMultilineString": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "MultilineStringToken") }))),
            "UnexpectedObject": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "OpenObjectToken") }))),
            "UnexpectedSimpleString": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "SimpleStringToken") }))),
            "UnexpectedTaggedUnion": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "TaggedUnionToken") }))),
            "UnexpectedValueError": type(group({
                "annotation": member(ref(glossaryParameter("Annotation"))),
                "expected": member(ref(typeReference("Expected"))),
                "found": member(taggedUnion({
                    "array": group({}),
                    "object": group({}),
                    "multiline string": group({}),
                    "tagged union": group({}),
                    "simple string": group({}),
                })),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "UnexpectedValueHandler": aInterface(['choice', {
                'options': d({
                    "array": aInterfaceMethod(typeReference("UnexpectedArray"), ['reference', aExternalInterfaceReference("h", "ArrayHandler")]),
                    "multiline string": aInterfaceMethod(typeReference("UnexpectedMultilineString")),
                    "object": aInterfaceMethod(typeReference("UnexpectedObject"), ['reference', aExternalInterfaceReference("h", "ObjectHandler")]),
                    "simple string": aInterfaceMethod(typeReference("UnexpectedSimpleString")),
                    "tagged union": aInterfaceMethod(typeReference("UnexpectedTaggedUnion"), ['reference', aExternalInterfaceReference("h", "TaggedUnionHandler")]),
                }),
            }]),
            "OnUnexpectedValue": aInterface(aInterfaceMethod(typeReference("UnexpectedValueError"))),

        }),
        'algorithms': d({
            "CreateExpectArray": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnArray"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectArrayOrObject": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "objectHandler": aExternalInterfaceReference("h", "OnObject"),
                "arrayHandler": aExternalInterfaceReference("h", "OnArray"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectObject": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnObject"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectMultilineString": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnMultilineString"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectSimpleString": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnSimpleString"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectDictionary": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnObject"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectList": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnArray"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectTaggedUnion": constructor(aExternalInterfaceReference("h", "ValueHandler"), {
                "handler": aExternalInterfaceReference("h", "OnTaggedUnion"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateUnexpectedValueHandler": constructor(aInterfaceReference("UnexpectedValueHandler"), {
                "handler": aInterfaceReference("OnUnexpectedValue"),
                // "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            // "ExpectArray": func(typeReference("common", "Null"), null, builderReference("ExpectArray"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
            // "ExpectArrayOrObject": func(typeReference("common", "Null"), null, builderReference("ExpectArrayOrObject"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
            // "ExpectObject": func(typeReference("common", "Null"), null, builderReference("ExpectObject"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
            // "ExpectMultilineString": func(typeReference("common", "Null"), null, builderReference("ExpectMultilineString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
            // "ExpectDictionary": func(typeReference("common", "Null"), null, builderReference("ExpectDictionary"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnObject"))),
            // "ExpectList": func(typeReference("common", "Null"), null, builderReference("ExpectList"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnArray"))),
            // "ExpectSimpleString": func(typeReference("common", "Null"), null, builderReference("ExpectSimpleString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
            // "ExpectQuotedString": func(typeReference("common", "Null"), null, builderReference("ExpectQuotedString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString"))),
            // "ExpectApostrophedString": func(typeReference("common", "Null"), null, builderReference("ExpectApostrophedString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString"))),
            // "ExpectTaggedUnion": func(typeReference("common", "Null"), null, builderReference("ExpectTaggedUnion"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
            // "CreateUnexpectedHandler": func(typeReference("common", "Null"), null, builderReference("OnUnexpectedValue"), inf(interfaceReference("UnexpectedValueHandler"))),

        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}