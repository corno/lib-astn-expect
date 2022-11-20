"use strict";
// import * as pl from "pareto-core-lib"
// import * as pm from "pareto-core-state"
// import * as h from "api-astn-handlers"
// import * as apl from "lib-astn-parser"
// import * as atl from "lib-astn-tokenizer"
// import * as ata from "api-astn-tokenizer"
// import * as uglyStuff from "api-pareto-ugly-stuff"
// import * as lib from "../../../pub"
// const parserLib = apl.init()
// const tokenizerLib = atl.init()
// export type ITestContext = {
//     doTest: (
//         $: {
//             data: string,
//             expectedIssues: string[],
//         },
//         $i: {
//             handler: (ec: lib.IExpectContext<ata.TokenizerAnnotationData>) => h.IRequiredValueHandler<ata.TokenizerAnnotationData>,
//         }
//     ) => void
// }
// export function createTestContext(
//     $i: {
//         callback:(($: ITestContext) => void)
//     },
//     $d: {
//         ctc: {
//             push: uglyStuff.Push,
//             includes: uglyStuff.Includes,
//             getElement: uglyStuff.GetElement,
//             arrayLength: uglyStuff.ArrayLength,
//         },
//         JSONStringify: (data: any) => string
//         toRawDictionary: uglyStuff.ToRawDictionary,
//         toRawArray: uglyStuff.ToRawArray,
//     }
// ): void {
//     $i.callback( {
//         doTest: ($, $i) => {
//             const actualIssuesBuilder = pm.createArrayBuilder<string>()
//             function logError($: {
//                 error: string,
//                 annotation: ata.TokenizerAnnotationData,
//                 //severity: lib.DiagnosticSeverity
//             }) {
//                 actualIssuesBuilder.push(`${$.error} @ ${tokenizerLib.createRangeMessage($.annotation.range)}`)
//             }
//             const ec = lib.$.createExpectContext<ata.TokenizerAnnotationData>(
//                 {
//                     duplicateEntrySeverity: ["warning", null],
//                     onDuplicateEntry: ["overwrite", null],
//                 },
//                 {
//                     issueHandler: ($) => {
//                         logError(
//                             {
//                                 error: lib.$.createExpectIssueMessage(
//                                     {
//                                         issue: $.issue
//                                     }
//                                 ),
//                                 annotation: $.annotation
//                             }
//                         )
//                     },
//                 },
//                 $d.ctc,
//             )
//             const tok = tokenizerLib.createCreateTokenizer(
//                 {
//                     onError: ($) => {
//                         actualIssuesBuilder.push(`${$.error} @ ${tokenizerLib.createRangeMessage($.range)}`)
//                     },
//                 }
//             )(
//                 {
//                     consumer: parserLib.createCreateTreeParserWithSerializedError<ata.TokenizerAnnotationData>(
//                         {
//                             onError: logError
//                         }
//                     )(
//                         {
//                             handler: {
//                                 onEnd: () => {
//                                     return {
//                                         onEnd: () => {
//                                         },
//                                         onToken: () => {
//                                         }
//                                     }
//                                 },
//                                 root: $i.handler(ec)
//                             },
//                         }
//                     )
//                 }
//             )
//             tok.onData($.data)
//             tok.onEnd()
//             const actualIssues =  actualIssuesBuilder.toArray()
//             const serializedActualIssues = $d.JSONStringify($d.toRawArray(actualIssues))
//             const serializedExpectedIssues = $d.JSONStringify($.expectedIssues)
//             if (serializedExpectedIssues !== serializedActualIssues) {
//                 pl.logDebugMessage(serializedExpectedIssues)
//                 pl.logDebugMessage(serializedActualIssues)
//                 pl.panic("FOUND ISSUE")
//             }
//         }
//     })
// }
