/* eslint
*/
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pw from "pareto-core-raw"

import * as th from "api-astn-handlers"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as api from "../interface"
import { createDummyValueHandler } from "./dummyHandlers"
import { IExpectContext } from "../interface"

interface ICreateContext<Annotation> {
    createDictionaryHandler(
        onEntry: ($: {
            token: th.SimpleStringToken<Annotation>
        }) => th.IRequiredValueHandler<Annotation>,
        onBegin?: ($: {
            token: th.OpenObjectToken<Annotation>
        }) => void,
        onEnd?: ($: {
            annotation: Annotation
        }) => void,
    ): th.OnObject<Annotation>
    createVerboseGroupHandler(
        expectedProperties?: api.ExpectedProperties<Annotation>,
        onBegin?: ($: {
            token: th.OpenObjectToken<Annotation>
        }) => void,
        onEnd?: ($: {
            hasErrors: boolean
            annotation: Annotation
        }) => void,
        onUnexpectedProperty?: ($: {
            token: th.SimpleStringToken<Annotation>
        }) => th.IRequiredValueHandler<Annotation>,
    ): th.OnObject<Annotation>
    createShorthandGroupHandler(
        expectedElements?: api.ExpectedElements<Annotation>,
        onBegin?: ($: {
            token: th.OpenArrayToken<Annotation>
        }) => void,
        onEnd?: ($: {
            annotation: Annotation
        }) => void
    ): th.OnArray<Annotation>
    createListHandler(
        onElement: () => th.IValueHandler<Annotation>,
        onBegin?: ($: {
            token: th.OpenArrayToken<Annotation>
        }) => void,
        onEnd?: ($: {
            annotation: Annotation
        }) => void,
    ): th.OnArray<Annotation>
    createTaggedUnionHandler(
        options?: api.Options<Annotation>,
        onUnexpectedOption?: ($: {
            taggedUnionToken: th.TaggedUnionToken<Annotation>
            optionToken: th.SimpleStringToken<Annotation>
        }) => void,
        onMissingOption?: () => void,
    ): th.OnTaggedUnion<Annotation>
    createUnexpectedSimpleStringHandler(
        expected: api.ExpectedValue,
        onInvalidType?: api.OnInvalidType<Annotation>,
        onNull?: ($: {
            token: th.SimpleStringToken<Annotation>
        }) => void,
    ): th.OnSimpleString<Annotation>
    createUnexpectedMultilineStringHandler(
        expected: api.ExpectedValue,
        onInvalidType?: api.OnInvalidType<Annotation>,
    ): th.OnMultilineString<Annotation>
    createNullHandler(
        expected: api.ExpectedValue,
        onInvalidType?: api.OnInvalidType<Annotation>,
    ): th.OnSimpleString<Annotation>
    createUnexpectedTaggedUnionHandler(
        expected: api.ExpectedValue,
        onInvalidType?: api.OnInvalidType<Annotation>,
    ): th.OnTaggedUnion<Annotation>
    createUnexpectedObjectHandler(
        expected: api.ExpectedValue,
        onInvalidType?: api.OnInvalidType<Annotation>,
    ): th.OnObject<Annotation>
    createUnexpectedArrayHandler(
        expected: api.ExpectedValue,
        onInvalidType?: api.OnInvalidType<Annotation>,
    ): th.OnArray<Annotation>
}

function createCreateContext<Annotation>(
    $: {
        duplicateEntrySeverity: api.ExpectSeverity,
        onDuplicateEntry: api.OnDuplicateEntry,
    },
    $i: {
        issueHandler: (
            $: {
                issue: api.ExpectIssue
                severity: api.DiagnosticSeverity
                annotation: Annotation
            }
        ) => void,
    },
    $d: {
        push: uglyStuff.Push,
        includes: uglyStuff.Includes,
        getElement: uglyStuff.GetElement,
        arrayLength: uglyStuff.ArrayLength,
    },
): ICreateContext<Annotation> {
    const onDuplicateEntry = $.onDuplicateEntry
    function raiseWarning(issue: api.ExpectIssue, annotation: Annotation): void {
        $i.issueHandler({
            issue: issue,
            severity: ["warning", {}],
            annotation: annotation,
        })
    }
    function raiseError(issue: api.ExpectIssue, annotation: Annotation): void {
        $i.issueHandler({
            issue: issue,
            severity: ["error", {}],
            annotation: annotation,
        })
    }

    function createDummyRequiredValueHandler(): th.IRequiredValueHandler<Annotation> {
        return {
            exists: createDummyValueHandler(),
            missing: () => { },
        }
    }

    return {
        createDictionaryHandler: (onEntry, onBegin, onEnd) => {
            return (data) => {

                if (data.token.token.type[0] !== "dictionary") {
                    raiseWarning(["object is not a dictionary", {}], data.token.annotation)
                }
                if (onBegin) {
                    onBegin(data)
                }
                const foundEntries: string[] = []
                return {
                    property: (propertyData) => {
                        const process = (): th.IRequiredValueHandler<Annotation> => {
                            if ($d.includes(foundEntries, propertyData.token.token.value)) {
                                switch ($.duplicateEntrySeverity[0]) {
                                    case "error":
                                        raiseError(["duplicate entry", { key: propertyData.token.token.value }], propertyData.token.annotation)
                                        break
                                    case "nothing":
                                        break
                                    case "warning":
                                        raiseWarning(["duplicate entry", { key: propertyData.token.token.value }], propertyData.token.annotation)
                                        break
                                    default:
                                        pl.au($.duplicateEntrySeverity[0])
                                }
                                switch ($.onDuplicateEntry[0]) {
                                    case "ignore":
                                        return createDummyRequiredValueHandler()
                                    case "overwrite":
                                        return onEntry(propertyData)
                                    default:
                                        return pl.au($.onDuplicateEntry[0])
                                }
                            } else {
                                return onEntry(propertyData)
                            }

                        }
                        const vh = process()
                        $d.push(foundEntries, propertyData.token.token.value)
                        return vh
                    },
                    anonymousProperty: () => {
                        return createDummyValueHandler()
                    },
                    onEnd: (endData) => {
                        if (onEnd) {
                            onEnd(endData.token)
                        }
                    },
                }
            }
        },
        createVerboseGroupHandler: (expectedProperties, onBegin, onEnd, onUnexpectedProperty) => {
            const properties = expectedProperties ? expectedProperties : {}
            return (data) => {

                if (data.token.token.type[0] !== "verbose group") {
                    raiseWarning(["object is not a verbose group", {}], data.token.annotation)
                }
                if (onBegin) {
                    onBegin(data)
                }
                const foundProperies: string[] = []
                let hasErrors = false
                return {
                    property: ($$) => {
                        const onProperty = (): th.IRequiredValueHandler<Annotation> => {
                            const expected = properties[$$.token.token.value]
                            if (expected === undefined) {
                                hasErrors = true
                                raiseError(["unexpected property", {
                                    "found key": $$.token.token.value,
                                    "valid keys": pw.wrapRawDictionary(properties).map(() => null),
                                }], $$.token.annotation)
                                if (onUnexpectedProperty !== undefined) {
                                    return onUnexpectedProperty($$)
                                } else {
                                    return {
                                        exists: createDummyValueHandler(),
                                        missing: () => { },
                                    }
                                }
                            }
                            return expected.onExists($$)
                        }
                        const process = (): th.IRequiredValueHandler<Annotation> => {
                            if ($d.includes(foundProperies, $$.token.token.value)) {
                                switch ($.duplicateEntrySeverity[0]) {
                                    case "error":
                                        raiseError(["duplicate property", { name: $$.token.token.value }], $$.token.annotation)
                                        break
                                    case "nothing":
                                        break
                                    case "warning":
                                        raiseWarning(["duplicate property", { name: $$.token.token.value }], $$.token.annotation)
                                        break
                                    default:
                                        return pl.au($.duplicateEntrySeverity[0])
                                }
                                switch ($.onDuplicateEntry[0]) {
                                    case "ignore":
                                        return createDummyRequiredValueHandler()
                                    case "overwrite":
                                        return onProperty()
                                    default:
                                        return pl.au($.onDuplicateEntry[0])
                                }
                            } else {
                                return onProperty()
                            }

                        }
                        const vh = process()
                        $d.push(foundProperies, $$.token.token.value)
                        return vh
                    },
                    anonymousProperty: () => {
                        return createDummyValueHandler()
                    },
                    onEnd: (endData) => {
                        pw.wrapRawDictionary(properties).forEach(() => false, ($, epName) => {
                            if (!$d.includes(foundProperies, epName)) {
                                const ep = properties[epName]
                                if (ep.onNotExists === null) {
                                    raiseError(["missing property", { name: epName }], data.token.annotation)//FIX print location properly
                                    hasErrors = true
                                } else {
                                    ep.onNotExists({
                                        beginToken: data.token,
                                        endToken: endData.token,
                                    })
                                }
                            }
                        })
                        if (onEnd) {
                            onEnd({
                                hasErrors: hasErrors,
                                annotation: endData.token.annotation,
                            })
                        }

                    },
                }
            }
        },
        createShorthandGroupHandler: (
            expectedElements,
            onBegin,
            onEnd,
        ) => {
            const elements = expectedElements ? expectedElements : []
            return (typeData) => {
                if (onBegin) {
                    onBegin(typeData)
                }
                if (typeData.token.token.type[0] !== "shorthand group") {
                    raiseWarning(["array is not a shorthand group", {}], typeData.token.annotation)
                }
                let index = 0
                return {
                    element: () => {
                        const ee2 = $d.getElement(elements, index)
                        index++
                        if (ee2 === undefined) {
                            const dvh = createDummyValueHandler()
                            return {
                                object: (data) => {
                                    raiseError(["superfluous element", {}], data.token.annotation)
                                    return dvh.object(data)
                                },
                                array: (data) => {
                                    raiseError(["superfluous element", {}], data.token.annotation)
                                    return dvh.array(data)
                                },
                                simpleString: (data) => {
                                    raiseError(["superfluous element", {}], data.token.annotation)
                                    return dvh.simpleString(data)
                                },
                                multilineString: (data) => {
                                    raiseError(["superfluous element", {}], data.token.annotation)
                                    return dvh.multilineString(data)
                                },
                                taggedUnion: (data) => {
                                    raiseError(["superfluous element", {}], data.token.annotation)
                                    return dvh.taggedUnion(data)
                                },
                            }
                        } else {
                            return ee2.getHandler().exists
                        }
                    },
                    onEnd: ($$) => {
                        if ($d.arrayLength(elements) - index > 0) {
                            const builder = pm.createDictionaryBuilder<null>(
                                onDuplicateEntry,
                                (key) => {
                                    raiseError(["duplicate entry", { key: key}], $$.token.annotation)
                                }
                            )
                            pw.wrapRawArray(elements).forEach(($) => {
                                builder.add($.name, null)
                            })
                            raiseError(['elements missing', {
                                names: builder.getDictionary(),
                            }], $$.token.annotation)
                            for (let x = index; x !== $d.arrayLength(elements); x += 1) {
                                const ee2 = $d.getElement(elements, x)
                                ee2.getHandler().missing({
                                    annotation: $$.token.annotation
                                })
                            }
                        }
                        if (onEnd) {
                            onEnd($$.token)
                        }

                    },
                }
            }
        },
        createListHandler: (
            onElement,
            onBegin,
            onEnd,
        ) => {
            return (data) => {
                if (data.token.token.type[0] !== "list") {
                    raiseWarning(["array is not a list", {}], data.token.annotation)
                }
                if (onBegin) {
                    onBegin(data)
                }
                return {
                    element: () => onElement(),
                    onEnd: (endData) => {
                        if (onEnd) {
                            onEnd(endData.token)
                        }

                    },
                }
            }
        },
        createTaggedUnionHandler: (
            options,
            onUnexpectedOption,
            onMissingOption,
        ) => {
            return (tuData) => {
                return {
                    option: (optionData) => {

                        const optionHandler = options ? options[optionData.token.token.value] : undefined
                        if (optionHandler === undefined) {
                            raiseError(["unknown option", {
                                "found": optionData.token.token.value,
                                "valid options": pw.wrapRawDictionary(options ? options : {}).map($ => null),
                            }], optionData.token.annotation)
                            if (onUnexpectedOption !== undefined) {
                                onUnexpectedOption({
                                    taggedUnionToken: tuData.token,
                                    optionToken: optionData.token,
                                })
                            }
                            return createDummyRequiredValueHandler()
                        } else {
                            return optionHandler(tuData.token, optionData.token)
                        }

                    },
                    missingOption: () => {
                        if (onMissingOption) {
                            onMissingOption()
                        }
                        return createDummyRequiredValueHandler()
                    },
                    end: () => { },
                }
            }
        },
        createUnexpectedSimpleStringHandler: (
            expected,
            onInvalidType,
            onNull,
        ) => {
            return (svData) => {
                if (onNull !== undefined && svData.token.token.wrapping[0] === "none" && svData.token.token.value === "null") {
                    onNull(svData)
                } else {
                    if (onInvalidType !== undefined && onInvalidType !== null) {
                        onInvalidType({
                            annotation: svData.token.annotation,
                        })
                    } else {
                        raiseError(["invalid value type", {
                            found: "string",
                            expected: expected,

                        }], svData.token.annotation)
                    }
                }
            }
        },
        createUnexpectedMultilineStringHandler: (
            expected,
            onInvalidType,
        ) => {
            return (svData) => {
                if (onInvalidType !== undefined && onInvalidType !== null) {
                    onInvalidType({
                        annotation: svData.token.annotation,
                    })
                } else {
                    raiseError(["invalid value type", {
                        found: "string",
                        expected: expected,

                    }], svData.token.annotation)
                }
            }
        },
        createNullHandler: (
            expected,
            onInvalidType,
        ) => {
            return (svData) => {
                if (onInvalidType !== undefined && onInvalidType !== null) {
                    onInvalidType({
                        annotation: svData.token.annotation,
                    })
                } else {
                    raiseError(["invalid value type", { found: "string", expected: expected }], svData.token.annotation)
                }
            }
        },
        createUnexpectedTaggedUnionHandler: (
            expected,
            onInvalidType,
        ) => {
            return () => {
                return {
                    option: ($) => {
                        if (onInvalidType !== undefined && onInvalidType !== null) {
                            onInvalidType({
                                annotation: $.token.annotation,
                            })
                        } else {
                            raiseError(["invalid value type", { found: "tagged union", expected: expected }], $.token.annotation)
                        }
                        return createDummyRequiredValueHandler()
                    },
                    missingOption: () => createDummyRequiredValueHandler(),
                    end: () => { },
                }
            }
        },
        createUnexpectedObjectHandler: (
            expected,
            onInvalidType,
        ) => {
            return ($) => {
                if (onInvalidType !== undefined && onInvalidType !== null) {
                    onInvalidType({
                        annotation: $.token.annotation,
                    })
                } else {
                    raiseError(
                        ["invalid value type", { found: "object", expected: expected }],
                        $.token.annotation,
                    )
                }
                return {
                    property: (propertyData) => {
                        return {
                            exists: createDummyValueHandler(),
                            missing: () => { },
                        }
                    },
                    anonymousProperty: () => createDummyValueHandler(),
                    onEnd: (_endData) => { },
                }
            }
        },
        createUnexpectedArrayHandler: (
            expected,
            onInvalidType,
        ) => {
            return ($) => {
                if (onInvalidType !== undefined && onInvalidType !== null) {
                    onInvalidType({
                        annotation: $.token.annotation,
                    })
                } else {
                    raiseError(
                        ["invalid value type", { found: "array", expected: expected }],
                        $.token.annotation
                    )
                }
                return {
                    element: () => {
                        return createDummyValueHandler()
                    },
                    onEnd: (_endData) => { },
                }
            }
        },
    }
}

export function createExpectContext<Annotation>(
    $: {
        duplicateEntrySeverity: api.ExpectSeverity
        onDuplicateEntry: api.OnDuplicateEntry
    },
    $i: {
        issueHandler: api.IssueHandler<Annotation>
        onInvalidType: api.OnInvalidType<Annotation>
    },
    $d: {
        push: uglyStuff.Push,
        includes: uglyStuff.Includes,
        getElement: uglyStuff.GetElement,
        arrayLength: uglyStuff.ArrayLength,
    },
): IExpectContext<Annotation> {

    function raiseError(
        issue: api.ExpectIssue,
        annotation: Annotation,
    ): void {
        $i.issueHandler({
            issue: issue,
            severity: ["error", {}],
            annotation: annotation,
        })
    }
    function raiseWarning(
        issue: api.ExpectIssue,
        annotation: Annotation,
    ): void {
        $i.issueHandler({
            issue: issue,
            severity: ["warning", {}],
            annotation: annotation,
        })
    }

    const createContext = createCreateContext(
        $,
        $i,
        $d,
    )

    function expectSimpleStringImp(
        expected: api.ExpectedValue,
        callback: ($: {
            token: th.SimpleStringToken<Annotation>
        }) => void,
        onInvalidType?: api.OnInvalidType<Annotation>,
    ): th.IValueHandler<Annotation> {
        return {
            array: createContext.createUnexpectedArrayHandler(expected, onInvalidType),
            object: createContext.createUnexpectedObjectHandler(expected, onInvalidType),
            simpleString: callback,
            multilineString: createContext.createUnexpectedMultilineStringHandler(expected, onInvalidType),
            taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expected, onInvalidType),
        }
    }

    return {
        expectSimpleString: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "string",
                "null allowed": $.onNull !== undefined,
            }
            return expectSimpleStringImp(expectValue, $.callback, $i.onInvalidType)
        },
        expectQuotedString: ($) => {
            const expectValue: api.ExpectedValue = {
                "type": "quoted string",
                "null allowed": $.onNull !== undefined,
            }
            return expectSimpleStringImp(
                expectValue,
                ($$) => {
                    if ($$.token.token.wrapping[0] !== "quote") {
                        if ($.warningOnly) {
                            raiseWarning(["string is not quoted", {}], $$.token.annotation)
                            return $.callback({
                                token: $$.token,
                            })
                        } else {
                            if ($i.onInvalidType) {
                                $i.onInvalidType({
                                    annotation: $$.token.annotation,
                                })
                            } else {
                                raiseError(
                                    ["string is not quoted", {}],
                                    $$.token.annotation,
                                )
                            }
                        }
                    } else {
                        return $.callback({
                            token: $$.token,
                        })
                    }
                },
                $i.onInvalidType
            )
        },
        expectNonWrappedString: ($) => {
            const expectValue: api.ExpectedValue = {
                "type": "nonwrapped string",
                "null allowed": $.onNull !== undefined,
            }
            return expectSimpleStringImp(
                expectValue,
                ($$) => {
                    if ($$.token.token.wrapping[0] !== "none") {
                        if ($.warningOnly) {
                            raiseWarning(["string should not have quotes or apostrophes", {}], $$.token.annotation)
                            return $.callback({
                                token: $$.token,
                            })
                        } else {
                            if ($i.onInvalidType) {
                                $i.onInvalidType({
                                    annotation: $$.token.annotation,
                                })
                            } else {
                                raiseError(
                                    ["string should not have quotes or apostrophes", {}],
                                    $$.token.annotation,
                                )
                            }
                        }
                    } else {
                        return $.callback({
                            token: $$.token,
                        })
                    }
                },
                $i.onInvalidType
            )
        },
        expectDictionary: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "dictionary",
                "null allowed": false,
            }
            return {
                array: createContext.createUnexpectedArrayHandler(expectValue, $i.onInvalidType),
                object: createContext.createDictionaryHandler($.onProperty, $.onBegin, $.onEnd),
                simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
                multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
                taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
            }
        },
        expectVerboseGroup: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "verbose group",
                "null allowed": $.onNull !== undefined,
            }
            return {
                array: createContext.createUnexpectedArrayHandler(expectValue, $i.onInvalidType),
                object: createContext.createVerboseGroupHandler(
                    $.properties,
                    $.onBegin,
                    $.onEnd,
                    $.onUnexpectedProperty
                ),
                simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
                multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
                taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
            }
        },
        expectList: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "list",
                "null allowed": false,
            }
            return {
                array: createContext.createListHandler($.onElement, $.onBegin, $.onEnd),
                object: createContext.createUnexpectedObjectHandler(expectValue, $i.onInvalidType),
                simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
                multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
                taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
            }
        },
        expectShorthandGroup: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "shorthand group",
                "null allowed": $.onNull !== undefined,
            }
            return {
                array: createContext.createShorthandGroupHandler($.elements, $.onBegin, $.onEnd),
                object: createContext.createUnexpectedObjectHandler(expectValue, $i.onInvalidType),
                simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
                multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
                taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
            }
        },

        expectGroup: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "type or shorthand group",
                "null allowed": $.onNull !== undefined,
            }
            return {
                array: createContext.createShorthandGroupHandler($.elements, $.onShorthandGroupBegin, $.onShorthandGroupEnd),
                object: createContext.createVerboseGroupHandler(
                    $.properties,
                    $.onTypeBegin,
                    $.onTypeEnd,
                    $.onUnexpectedProperty
                ),
                simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
                multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
                taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
            }
        },
        expectTaggedUnion: ($) => {

            const expectValue: api.ExpectedValue = {
                "type": "tagged union",
                "null allowed": $.onNull !== undefined,
            }
            return {
                array: createContext.createUnexpectedArrayHandler(expectValue, $i.onInvalidType),
                object: createContext.createUnexpectedObjectHandler(expectValue, $i.onInvalidType),
                simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
                multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
                taggedUnion: createContext.createTaggedUnionHandler(
                    $.options,
                    $.onUnexpectedOption,
                    $.onMissingOption,
                ),
            }
        },
    }
}