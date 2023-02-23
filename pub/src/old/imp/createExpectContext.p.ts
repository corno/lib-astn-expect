
import * as pl from 'pareto-core-lib'
// import * as ps from 'pareto-core-state'
// import * as pw from 'pareto-core-raw'

// import * as mth from "api-astn-handlers"
// import * as muglyStuff from "api-pareto-ugly-stuff"

// import * as mapi from "../interface"
// import { createDummyValueHandler } from "./dummyHandlers.p"
// import { XExpectContext } from "../interface"

// interface ICreateContext<PAnnotation> {
//     createDictionaryHandler(
//         onEntry: ($: {
//             token: th.TSimpleStringToken<PAnnotation>
//         }) => th.IRequiredValueHandler<PAnnotation>,
//         onBegin?: ($: {
//             token: th.TOpenObjectToken<PAnnotation>
//         }) => void,
//         onEnd?: ($: {
//             annotation: PAnnotation
//         }) => void,
//     ): th.OnObject<PAnnotation>
//     createVerboseGroupHandler(
//         expectedProperties?: api.IExpectedProperties<PAnnotation>,
//         onBegin?: ($: {
//             token: th.TOpenObjectToken<PAnnotation>
//         }) => void,
//         onEnd?: ($: {
//             hasErrors: boolean
//             annotation: PAnnotation
//         }) => void,
//         onUnexpectedProperty?: ($: {
//             token: th.TSimpleStringToken<PAnnotation>
//         }) => th.IRequiredValueHandler<PAnnotation>,
//     ): th.OnObject<PAnnotation>
//     createShorthandGroupHandler(
//         expectedElements?: api.IExpectedElements<PAnnotation>,
//         onBegin?: ($: {
//             token: th.TOpenArrayToken<PAnnotation>
//         }) => void,
//         onEnd?: ($: {
//             annotation: PAnnotation
//         }) => void
//     ): th.OnArray<PAnnotation>
//     createListHandler(
//         onElement: () => th.IValueHandler<PAnnotation>,
//         onBegin?: ($: {
//             token: th.TOpenArrayToken<PAnnotation>
//         }) => void,
//         onEnd?: ($: {
//             annotation: PAnnotation
//         }) => void,
//     ): th.OnArray<PAnnotation>
//     createTaggedUnionHandler(
//         options?: api.Options<PAnnotation>,
//         onUnexpectedOption?: ($: {
//             taggedUnionToken: th.TTaggedUnionToken<PAnnotation>
//             optionToken: th.TSimpleStringToken<PAnnotation>
//         }) => void,
//         onMissingOption?: () => void,
//     ): th.OnTaggedUnion<PAnnotation>
//     createUnexpectedSimpleStringHandler(
//         expected: api.TExpectedValue,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//         onNull?: ($: {
//             token: th.TSimpleStringToken<PAnnotation>
//         }) => void,
//     ): th.OnSimpleString<PAnnotation>
//     createUnexpectedMultilineStringHandler(
//         expected: api.TExpectedValue,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//     ): th.OnMultilineString<PAnnotation>
//     createNullHandler(
//         expected: api.TExpectedValue,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//     ): th.OnSimpleString<PAnnotation>
//     createUnexpectedTaggedUnionHandler(
//         expected: api.TExpectedValue,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//     ): th.OnTaggedUnion<PAnnotation>
//     createUnexpectedObjectHandler(
//         expected: api.TExpectedValue,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//     ): th.OnObject<PAnnotation>
//     createUnexpectedArrayHandler(
//         expected: api.TExpectedValue,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//     ): th.OnArray<PAnnotation>
// }

// function createCreateContext<PAnnotation>(
//     $: {
//         duplicateEntrySeverity: api.TExpectSeverity,
//         onDuplicateEntry: api.TOnDuplicateEntry,
//     },
//     $i: {
//         issueHandler: (
//             $: {
//                 issue: api.TExpectIssue
//                 severity: api.TDiagnosticSeverity
//                 annotation: PAnnotation
//             }
//         ) => void,
//     },
//     $d: {
//         //push: uglyStuff.Push,
//         includes: uglyStuff.FIncludes,
//         getElement: uglyStuff.FGetElement,
//         arrayLength: uglyStuff.FArrayLength,
//     },
// ): ICreateContext<PAnnotation> {
//     const onDuplicateEntry = $.onDuplicateEntry
//     function raiseWarning(issue: api.TExpectIssue, annotation: PAnnotation): void {
//         $i.issueHandler({
//             issue: issue,
//             severity: ['warning', null],
//             annotation: annotation,
//         })
//     }
//     function raiseError(issue: api.TExpectIssue, annotation: PAnnotation): void {
//         $i.issueHandler({
//             issue: issue,
//             severity: ['error', null],
//             annotation: annotation,
//         })
//     }

//     function createDummyRequiredValueHandler(): th.IRequiredValueHandler<PAnnotation> {
//         return {
//             exists: createDummyValueHandler(),
//             missing: () => { },
//         }
//     }

//     return {
//         createDictionaryHandler: (onEntry, onBegin, onEnd) => {
//             return (data) => {

//                 if (data.token.token.type[0] !== "dictionary") {
//                     raiseWarning(['object is not a dictionary', null], data.token.annotation)
//                 }
//                 if (onBegin) {
//                     onBegin(data)
//                 }
//                 const foundEntries: string[] = []
//                 return {
//                     property: (propertyData) => {
//                         const process = (): th.IRequiredValueHandler<PAnnotation> => {
//                             if ($d.includes(foundEntries, propertyData.token.token.value)) {
//                                 switch ($.duplicateEntrySeverity[0]) {
//                                     case 'error':
//                                         raiseError(['duplicate entry', { key: propertyData.token.token.value }], propertyData.token.annotation)
//                                         break
//                                     case 'nothing':
//                                         break
//                                     case 'warning':
//                                         raiseWarning(['duplicate entry', { key: propertyData.token.token.value }], propertyData.token.annotation)
//                                         break
//                                     default:
//                                         pl.au($.duplicateEntrySeverity[0])
//                                 }
//                                 switch ($.onDuplicateEntry[0]) {
//                                     case 'ignore':
//                                         return createDummyRequiredValueHandler()
//                                     case 'overwrite':
//                                         return onEntry(propertyData)
//                                     default:
//                                         return pl.au($.onDuplicateEntry[0])
//                                 }
//                             } else {
//                                 return onEntry(propertyData)
//                             }

//                         }
//                         const vh = process()
//                         $d.push(foundEntries, propertyData.token.token.value)
//                         return vh
//                     },
//                     anonymousProperty: () => {
//                         return createDummyValueHandler()
//                     },
//                     onEnd: (endData) => {
//                         if (onEnd) {
//                             onEnd(endData.token)
//                         }
//                     },
//                 }
//             }
//         },
//         createVerboseGroupHandler: (expectedProperties, onBegin, onEnd, onUnexpectedProperty) => {
//             const properties = expectedProperties ? expectedProperties : {}
//             return (data) => {

//                 if (data.token.token.type[0] !== "verbose group") {
//                     raiseWarning(['object is not a verbose group', null], data.token.annotation)
//                 }
//                 if (onBegin) {
//                     onBegin(data)
//                 }
//                 const foundProperies: string[] = []
//                 let hasErrors = false
//                 return {
//                     property: ($$) => {
//                         const onProperty = (): th.IRequiredValueHandler<PAnnotation> => {
//                             const expected = properties[$$.token.token.value]
//                             if (expected === undefined) {
//                                 hasErrors = true
//                                 raiseError(['unexpected property', {
//                                     "found key": $$.token.token.value,
//                                     "valid keys": pw.wrapRawDictionary(properties).map(() => null),
//                                 }], $$.token.annotation)
//                                 if (onUnexpectedProperty !== undefined) {
//                                     return onUnexpectedProperty($$)
//                                 } else {
//                                     return {
//                                         exists: createDummyValueHandler(),
//                                         missing: () => { },
//                                     }
//                                 }
//                             }
//                             return expected.onExists($$)
//                         }
//                         const process = (): th.IRequiredValueHandler<PAnnotation> => {
//                             if ($d.includes(foundProperies, $$.token.token.value)) {
//                                 switch ($.duplicateEntrySeverity[0]) {
//                                     case 'error':
//                                         raiseError(['duplicate property', { name: $$.token.token.value }], $$.token.annotation)
//                                         break
//                                     case 'nothing':
//                                         break
//                                     case 'warning':
//                                         raiseWarning(['duplicate property', { name: $$.token.token.value }], $$.token.annotation)
//                                         break
//                                     default:
//                                         return pl.au($.duplicateEntrySeverity[0])
//                                 }
//                                 switch ($.onDuplicateEntry[0]) {
//                                     case 'ignore':
//                                         return createDummyRequiredValueHandler()
//                                     case 'overwrite':
//                                         return onProperty()
//                                     default:
//                                         return pl.au($.onDuplicateEntry[0])
//                                 }
//                             } else {
//                                 return onProperty()
//                             }

//                         }
//                         const vh = process()
//                         $d.push(foundProperies, $$.token.token.value)
//                         return vh
//                     },
//                     anonymousProperty: () => {
//                         return createDummyValueHandler()
//                     },
//                     onEnd: (endData) => {
//                         pw.wrapRawDictionary(properties).forEach(() => false, ($, epName) => {
//                             if (!$d.includes(foundProperies, epName)) {
//                                 const ep = properties[epName]
//                                 if (ep.onNotExists === null) {
//                                     raiseError(['missing property', { name: epName }], data.token.annotation)//FIX print location properly
//                                     hasErrors = true
//                                 } else {
//                                     ep.onNotExists({
//                                         beginToken: data.token,
//                                         endToken: endData.token,
//                                     })
//                                 }
//                             }
//                         })
//                         if (onEnd) {
//                             onEnd({
//                                 hasErrors: hasErrors,
//                                 annotation: endData.token.annotation,
//                             })
//                         }

//                     },
//                 }
//             }
//         },
//         createShorthandGroupHandler: (
//             expectedElements,
//             onBegin,
//             onEnd,
//         ) => {
//             const elements = expectedElements ? expectedElements : []
//             return (typeData) => {
//                 if (onBegin) {
//                     onBegin(typeData)
//                 }
//                 if (typeData.token.token.type[0] !== "shorthand group") {
//                     raiseWarning(['array is not a shorthand group', null], typeData.token.annotation)
//                 }
//                 let index = 0
//                 return {
//                     element: () => {
//                         const ee2 = $d.getElement(elements, index)
//                         index++
//                         if (ee2 === undefined) {
//                             const dvh = createDummyValueHandler()
//                             return {
//                                 object: (data) => {
//                                     raiseError(['superfluous element', null], data.token.annotation)
//                                     return dvh.object(data)
//                                 },
//                                 array: (data) => {
//                                     raiseError(['superfluous element', null], data.token.annotation)
//                                     return dvh.array(data)
//                                 },
//                                 simpleString: (data) => {
//                                     raiseError(['superfluous element', null], data.token.annotation)
//                                     return dvh.simpleString(data)
//                                 },
//                                 multilineString: (data) => {
//                                     raiseError(['superfluous element', null], data.token.annotation)
//                                     return dvh.multilineString(data)
//                                 },
//                                 taggedUnion: (data) => {
//                                     raiseError(['superfluous element', null], data.token.annotation)
//                                     return dvh.taggedUnion(data)
//                                 },
//                             }
//                         } else {
//                             return ee2.getHandler().exists
//                         }
//                     },
//                     onEnd: ($$) => {
//                         if ($d.arrayLength(elements) - index > 0) {
//                             const builder = ps.createDictionaryBuilderFIXME<null>(
//                                 onDuplicateEntry,
//                                 (key) => {
//                                     raiseError(['duplicate entry', { key: key }], $$.token.annotation)
//                                 }
//                             )
//                             pw.wrapRawArray(elements).forEach(($) => {
//                                 builder.add($.name, null)
//                             })
//                             raiseError(['elements missing', {
//                                 names: builder.getDictionary(),
//                             }], $$.token.annotation)
//                             for (let x = index; x !== $d.arrayLength(elements); x += 1) {
//                                 const ee2 = $d.getElement(elements, x)
//                                 ee2.getHandler().missing({
//                                     annotation: $$.token.annotation
//                                 })
//                             }
//                         }
//                         if (onEnd) {
//                             onEnd($$.token)
//                         }

//                     },
//                 }
//             }
//         },
//         createListHandler: (
//             onElement,
//             onBegin,
//             onEnd,
//         ) => {
//             return (data) => {
//                 if (data.token.token.type[0] !== "list") {
//                     raiseWarning(['array is not a list', null], data.token.annotation)
//                 }
//                 if (onBegin) {
//                     onBegin(data)
//                 }
//                 return {
//                     element: () => onElement(),
//                     onEnd: (endData) => {
//                         if (onEnd) {
//                             onEnd(endData.token)
//                         }

//                     },
//                 }
//             }
//         },
//         createTaggedUnionHandler: (
//             options,
//             onUnexpectedOption,
//             onMissingOption,
//         ) => {
//             return (tuData) => {
//                 return {
//                     option: (optionData) => {

//                         const optionHandler = options ? options[optionData.token.token.value] : undefined
//                         if (optionHandler === undefined) {
//                             raiseError(['unknown option', {
//                                 "found": optionData.token.token.value,
//                                 "valid options": pw.wrapRawDictionary(options ? options : {}).map($ => null),
//                             }], optionData.token.annotation)
//                             if (onUnexpectedOption !== undefined) {
//                                 onUnexpectedOption({
//                                     taggedUnionToken: tuData.token,
//                                     optionToken: optionData.token,
//                                 })
//                             }
//                             return createDummyRequiredValueHandler()
//                         } else {
//                             return optionHandler(tuData.token, optionData.token)
//                         }

//                     },
//                     missingOption: () => {
//                         if (onMissingOption) {
//                             onMissingOption()
//                         }
//                         return createDummyRequiredValueHandler()
//                     },
//                     end: () => { },
//                 }
//             }
//         },
//         createUnexpectedSimpleStringHandler: (
//             expected,
//             onInvalidType,
//             onNull,
//         ) => {
//             return (svData) => {
//                 if (onNull !== undefined && svData.token.token.wrapping[0] === "none" && svData.token.token.value === "null") {
//                     onNull(svData)
//                 } else {
//                     if (onInvalidType !== undefined && onInvalidType !== null) {
//                         onInvalidType({
//                             annotation: svData.token.annotation,
//                         })
//                     } else {
//                         raiseError(['invalid value type', {
//                             found: ['string', null],
//                             expected: expected,

//                         }], svData.token.annotation)
//                     }
//                 }
//             }
//         },
//         createUnexpectedMultilineStringHandler: (
//             expected,
//             onInvalidType,
//         ) => {
//             return (svData) => {
//                 if (onInvalidType !== undefined && onInvalidType !== null) {
//                     onInvalidType({
//                         annotation: svData.token.annotation,
//                     })
//                 } else {
//                     raiseError(['invalid value type', {
//                         found: ['string', null],
//                         expected: expected,

//                     }], svData.token.annotation)
//                 }
//             }
//         },
//         createNullHandler: (
//             expected,
//             onInvalidType,
//         ) => {
//             return (svData) => {
//                 if (onInvalidType !== undefined && onInvalidType !== null) {
//                     onInvalidType({
//                         annotation: svData.token.annotation,
//                     })
//                 } else {
//                     raiseError(['invalid value type', { found: ['string', null], expected: expected }], svData.token.annotation)
//                 }
//             }
//         },
//         createUnexpectedTaggedUnionHandler: (
//             expected,
//             onInvalidType,
//         ) => {
//             return () => {
//                 return {
//                     option: ($) => {
//                         if (onInvalidType !== undefined && onInvalidType !== null) {
//                             onInvalidType({
//                                 annotation: $.token.annotation,
//                             })
//                         } else {
//                             raiseError(['invalid value type', { found: ['tagged union', null], expected: expected }], $.token.annotation)
//                         }
//                         return createDummyRequiredValueHandler()
//                     },
//                     missingOption: () => createDummyRequiredValueHandler(),
//                     end: () => { },
//                 }
//             }
//         },
//         createUnexpectedObjectHandler: (
//             expected,
//             onInvalidType,
//         ) => {
//             return ($) => {
//                 if (onInvalidType !== undefined && onInvalidType !== null) {
//                     onInvalidType({
//                         annotation: $.token.annotation,
//                     })
//                 } else {
//                     raiseError(
//                         ['invalid value type', { found: ['object', null], expected: expected }],
//                         $.token.annotation,
//                     )
//                 }
//                 return {
//                     property: (propertyData) => {
//                         return {
//                             exists: createDummyValueHandler(),
//                             missing: () => { },
//                         }
//                     },
//                     anonymousProperty: () => createDummyValueHandler(),
//                     onEnd: (_endData) => { },
//                 }
//             }
//         },
//         createUnexpectedArrayHandler: (
//             expected,
//             onInvalidType,
//         ) => {
//             return ($) => {
//                 if (onInvalidType !== undefined && onInvalidType !== null) {
//                     onInvalidType({
//                         annotation: $.token.annotation,
//                     })
//                 } else {
//                     raiseError(
//                         ['invalid value type', { found: ['array', null], expected: expected }],
//                         $.token.annotation
//                     )
//                 }
//                 return {
//                     element: () => {
//                         return createDummyValueHandler()
//                     },
//                     onEnd: (_endData) => { },
//                 }
//             }
//         },
//     }
// }

// export function createExpectContext<PAnnotation>(
//     $: {
//         duplicateEntrySeverity: api.TExpectSeverity
//         onDuplicateEntry: api.TOnDuplicateEntry
//     },
//     $i: {
//         issueHandler: api.IIssueHandler<PAnnotation>
//         onInvalidType: api.IOnInvalidType<PAnnotation>
//     },
//     $d: {
//         //push: uglyStuff.Push,
//         includes: uglyStuff.FIncludes,
//         getElement: uglyStuff.FGetElement,
//         arrayLength: uglyStuff.FArrayLength,
//     },
// ): XExpectContext<PAnnotation> {

//     function raiseError(
//         issue: api.TExpectIssue,
//         annotation: PAnnotation,
//     ): void {
//         $i.issueHandler({
//             issue: issue,
//             severity: ['error', null],
//             annotation: annotation,
//         })
//     }
//     function raiseWarning(
//         issue: api.TExpectIssue,
//         annotation: PAnnotation,
//     ): void {
//         $i.issueHandler({
//             issue: issue,
//             severity: ['warning', null],
//             annotation: annotation,
//         })
//     }

//     const createContext = createCreateContext(
//         $,
//         $i,
//         $d,
//     )

//     function expectSimpleStringImp(
//         expected: api.TExpectedValue,
//         callback: ($: {
//             token: th.TSimpleStringToken<PAnnotation>
//         }) => void,
//         onInvalidType?: api.IOnInvalidType<PAnnotation>,
//     ): th.IValueHandler<PAnnotation> {
//         return {
//             array: createContext.createUnexpectedArrayHandler(expected, onInvalidType),
//             object: createContext.createUnexpectedObjectHandler(expected, onInvalidType),
//             simpleString: callback,
//             multilineString: createContext.createUnexpectedMultilineStringHandler(expected, onInvalidType),
//             taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expected, onInvalidType),
//         }
//     }

//     return {
//         expectSimpleString: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['string', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return expectSimpleStringImp(expectValue, $.callback, $i.onInvalidType)
//         },
//         expectQuotedString: ($) => {
//             const expectValue: api.TExpectedValue = {
//                 "type": ['quoted string', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return expectSimpleStringImp(
//                 expectValue,
//                 ($$) => {
//                     if ($$.token.token.wrapping[0] !== "quote") {
//                         if ($.warningOnly) {
//                             raiseWarning(['string is not quoted', null], $$.token.annotation)
//                             return $.callback({
//                                 token: $$.token,
//                             })
//                         } else {
//                             if ($i.onInvalidType) {
//                                 $i.onInvalidType({
//                                     annotation: $$.token.annotation,
//                                 })
//                             } else {
//                                 raiseError(
//                                     ['string is not quoted', null],
//                                     $$.token.annotation,
//                                 )
//                             }
//                         }
//                     } else {
//                         return $.callback({
//                             token: $$.token,
//                         })
//                     }
//                 },
//                 $i.onInvalidType
//             )
//         },
//         expectNonWrappedString: ($) => {
//             const expectValue: api.TExpectedValue = {
//                 "type": ['nonwrapped string', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return expectSimpleStringImp(
//                 expectValue,
//                 ($$) => {
//                     if ($$.token.token.wrapping[0] !== "none") {
//                         if ($.warningOnly) {
//                             raiseWarning(['string should not have quotes or apostrophes', null], $$.token.annotation)
//                             return $.callback({
//                                 token: $$.token,
//                             })
//                         } else {
//                             if ($i.onInvalidType) {
//                                 $i.onInvalidType({
//                                     annotation: $$.token.annotation,
//                                 })
//                             } else {
//                                 raiseError(
//                                     ['string should not have quotes or apostrophes', null],
//                                     $$.token.annotation,
//                                 )
//                             }
//                         }
//                     } else {
//                         return $.callback({
//                             token: $$.token,
//                         })
//                     }
//                 },
//                 $i.onInvalidType
//             )
//         },
//         expectDictionary: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['dictionary', null],
//                 "null allowed": false,
//             }
//             return {
//                 array: createContext.createUnexpectedArrayHandler(expectValue, $i.onInvalidType),
//                 object: createContext.createDictionaryHandler($.onProperty, $.onBegin, $.onEnd),
//                 simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
//                 multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
//                 taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
//             }
//         },
//         expectVerboseGroup: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['verbose group', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return {
//                 array: createContext.createUnexpectedArrayHandler(expectValue, $i.onInvalidType),
//                 object: createContext.createVerboseGroupHandler(
//                     $.properties,
//                     $.onBegin,
//                     $.onEnd,
//                     $.onUnexpectedProperty
//                 ),
//                 simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
//                 multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
//                 taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
//             }
//         },
//         expectList: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['list', null],
//                 "null allowed": false,
//             }
//             return {
//                 array: createContext.createListHandler($.onElement, $.onBegin, $.onEnd),
//                 object: createContext.createUnexpectedObjectHandler(expectValue, $i.onInvalidType),
//                 simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
//                 multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
//                 taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
//             }
//         },
//         expectShorthandGroup: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['shorthand group', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return {
//                 array: createContext.createShorthandGroupHandler($.elements, $.onBegin, $.onEnd),
//                 object: createContext.createUnexpectedObjectHandler(expectValue, $i.onInvalidType),
//                 simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
//                 multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
//                 taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
//             }
//         },

//         expectGroup: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['type or shorthand group', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return {
//                 array: createContext.createShorthandGroupHandler($.elements, $.onShorthandGroupBegin, $.onShorthandGroupEnd),
//                 object: createContext.createVerboseGroupHandler(
//                     $.properties,
//                     $.onTypeBegin,
//                     $.onTypeEnd,
//                     $.onUnexpectedProperty
//                 ),
//                 simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
//                 multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
//                 taggedUnion: createContext.createUnexpectedTaggedUnionHandler(expectValue, $i.onInvalidType),
//             }
//         },
//         expectTaggedUnion: ($) => {

//             const expectValue: api.TExpectedValue = {
//                 "type": ['tagged union', null],
//                 "null allowed": $.onNull !== undefined,
//             }
//             return {
//                 array: createContext.createUnexpectedArrayHandler(expectValue, $i.onInvalidType),
//                 object: createContext.createUnexpectedObjectHandler(expectValue, $i.onInvalidType),
//                 simpleString: createContext.createUnexpectedSimpleStringHandler(expectValue, $i.onInvalidType, $.onNull),
//                 multilineString: createContext.createUnexpectedMultilineStringHandler(expectValue, $i.onInvalidType),
//                 taggedUnion: createContext.createTaggedUnionHandler(
//                     $.options,
//                     $.onUnexpectedOption,
//                     $.onMissingOption,
//                 ),
//             }
//         },
//     }
// }