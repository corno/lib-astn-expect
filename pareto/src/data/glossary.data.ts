import * as pd from 'pareto-core-data'

import {
    reference,
    typeReference,
     group, member, taggedUnion, func, builderReference, interfaceReference, inf, interfaceMethod, parametrizedInterfaceReference, glossaryParameter, type, parametrizedType, typeParameter, parametrizedReference, parametrizedTypeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
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
            "expected": member(reference("Expected")),
            "token": member(typeParameter("Token")),
        })),
        "UnexpectedArray": type(parametrizedReference("UnexpectedValue", { "Token": parametrizedTypeReference("h", { "Annotation": typeReference("Annotation") }, "OpenArrayToken") })),
        "UnexpectedMultilineString": type(parametrizedReference("UnexpectedValue", { "Token": parametrizedTypeReference("h", { "Annotation": typeReference("Annotation") }, "MultilineStringToken") })),
        "UnexpectedObject": type(parametrizedReference("UnexpectedValue", { "Token": parametrizedTypeReference("h", { "Annotation": typeReference("Annotation") }, "OpenObjectToken") })),
        "UnexpectedSimpleString": type(parametrizedReference("UnexpectedValue", { "Token": parametrizedTypeReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken") })),
        "UnexpectedTaggedUnion": type(parametrizedReference("UnexpectedValue", { "Token": parametrizedTypeReference("h", { "Annotation": typeReference("Annotation") }, "TaggedUnionToken") })),
        "UnexpectedValueError": type(group({
            "annotation": member(glossaryParameter("Annotation")),
            "expected": member(reference("Expected")),
            "found": member(taggedUnion({
                "array": group({}),
                "object": group({}),
                "multiline string": group({}),
                "tagged union": group({}),
                "simple string": group({}),
            })),
        })),
    }),
    'builders': d({
    }),
    'interfaces': d({
        // "UnexpectedValueHandler": ['group', {
        //     'members': d({
        //         "array": interfaceMethod(typeReference("UnexpectedArray"), ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ArrayHandler")]),
        //         "multiline string": interfaceMethod(typeReference("UnexpectedMultilineString")),
        //         "object": interfaceMethod(typeReference("UnexpectedObject"), ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ObjectHandler")]),
        //         "simple string": interfaceMethod(typeReference("UnexpectedSimpleString")),
        //         "tagged union": interfaceMethod(typeReference("UnexpectedTaggedUnion"), ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "TaggedUnionHandler")]),
        //     }),
        // }],
        // "ExpectArray": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnArray")],
        //         "unexpected": ['reference', interfaceReference("UnexpectedValueHandler")],
        //     }),
        // }],
        // "ExpectArrayOrObject": ['group', {
        //     'members': d({
        //         "arrayHandler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnArray")],
        //         "objectHandler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnObject")],
        //         "unexpected": ['reference', interfaceReference("UnexpectedValueHandler")],
        //     }),
        // }],
        // "ExpectObject": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnObject")],
        //         "unexpected": ['reference', interfaceReference("UnexpectedValueHandler")],
        //     }),
        // }],
        // "ExpectMultilineString": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnMultilineString")],
        //         "unexpected": ['reference', interfaceReference("UnexpectedValueHandler")],
        //     }),
        // }],
        // "ExpectSimpleString": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString")],
        //         "unexpected": ['reference', interfaceReference("UnexpectedValueHandler")],
        //     }),
        // }],
        // "ExpectDictionary": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnObject")],
        //         "unexpected": interfaceMethod(typeReference("common", "Null")),
        //     }),
        // }],
        // "ExpectList": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnArray")],
        //         "unexpected": interfaceMethod(typeReference("common", "Null")),
        //     }),
        // }],
        // "ExpectQuotedString": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString")],
        //         "unexpected": interfaceMethod(typeReference("common", "Null")),
        //     }),
        // }],
        // "ExpectApostrophedString": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString")],
        //         "unexpected": interfaceMethod(typeReference("common", "Null")),
        //     }),
        // }],
        // "ExpectTaggedUnion": ['group', {
        //     'members': d({
        //         "handler": ['reference', parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnTaggedUnion")],
        //         "unexpected": ['reference', interfaceReference("UnexpectedValueHandler")],
        //     }),
        // }],
        // "OnUnexpectedValue": interfaceMethod(typeReference("UnexpectedValueError")),

    }),
    'functions': d({
        "ExpectArray": func(typeReference("common", "Null"), null, builderReference("ExpectArray"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
        "ExpectArrayOrObject": func(typeReference("common", "Null"), null, builderReference("ExpectArrayOrObject"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
        "ExpectObject": func(typeReference("common", "Null"), null, builderReference("ExpectObject"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
        "ExpectMultilineString": func(typeReference("common", "Null"), null, builderReference("ExpectMultilineString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
        "ExpectDictionary": func(typeReference("common", "Null"), null, builderReference("ExpectDictionary"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnObject"))),
        "ExpectList": func(typeReference("common", "Null"), null, builderReference("ExpectList"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnArray"))),
        "ExpectSimpleString": func(typeReference("common", "Null"), null, builderReference("ExpectSimpleString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
        "ExpectQuotedString": func(typeReference("common", "Null"), null, builderReference("ExpectQuotedString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString"))),
        "ExpectApostrophedString": func(typeReference("common", "Null"), null, builderReference("ExpectApostrophedString"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "OnSimpleString"))),
        "ExpectTaggedUnion": func(typeReference("common", "Null"), null, builderReference("ExpectTaggedUnion"), inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "ValueHandler"))),
        "CreateUnexpectedHandler": func(typeReference("common", "Null"), null, builderReference("OnUnexpectedValue"), inf(interfaceReference("UnexpectedValueHandler"))),
    }),
}