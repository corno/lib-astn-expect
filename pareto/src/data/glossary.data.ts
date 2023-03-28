import * as pd from 'pareto-core-data'

import { constructor, aInterfaceMethod, aInterfaceReference, externalTypeReference, glossaryParameter, group, imp, member, parametrizedType, ref, taggedUnion, type, typeParameter, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp({ "Annotation": typeReference("Annotation") }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
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
                "token": member(typeParameter("Token")),
            })),
            "UnexpectedArray": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "OpenArrayToken") }))),
            "UnexpectedMultilineString": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "MultilineStringToken") }))),
            "UnexpectedObject": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "OpenObjectToken") }))),
            "UnexpectedSimpleString": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "SimpleStringToken") }))),
            "UnexpectedTaggedUnion": type(ref(typeReference("UnexpectedValue", { "Token": externalTypeReference("h", "TaggedUnionToken") }))),
            "UnexpectedValueError": type(group({
                "annotation": member(glossaryParameter("Annotation")),
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
            "UnexpectedValueHandler": ['choice', {
                'options': d({
                    "array": aInterfaceMethod(typeReference("UnexpectedArray"), ['reference', aInterfaceReference("h", "ArrayHandler")]),
                    "multiline string": aInterfaceMethod(typeReference("UnexpectedMultilineString")),
                    "object": aInterfaceMethod(typeReference("UnexpectedObject"), ['reference', aInterfaceReference("h", "ObjectHandler")]),
                    "simple string": aInterfaceMethod(typeReference("UnexpectedSimpleString")),
                    "tagged union": aInterfaceMethod(typeReference("UnexpectedTaggedUnion"), ['reference', aInterfaceReference("h", "TaggedUnionHandler")]),
                }),
            }],
            "OnUnexpectedValue": aInterfaceMethod(typeReference("UnexpectedValueError")),

        }),
        'algorithms': d({
            "CreateExpectArray": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnArray"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectArrayOrObject": constructor(aInterfaceReference("h", "ValueHandler"), {
                "objectHandler": aInterfaceReference("h", "OnObject"),
                "arrayHandler": aInterfaceReference("h", "OnArray"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectObject": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnObject"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectMultilineString": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnMultilineString"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectSimpleString": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnSimpleString"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectDictionary": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnObject"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectList": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnArray"),
                "unexpected": aInterfaceReference("UnexpectedValueHandler")
            }),
            "CreateExpectTaggedUnion": constructor(aInterfaceReference("h", "ValueHandler"), {
                "handler": aInterfaceReference("h", "OnTaggedUnion"),
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