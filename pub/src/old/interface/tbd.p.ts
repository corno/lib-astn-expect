// import * as pt from 'pareto-core-types'
// import * as uglyStuff from "api-pareto-ugly-stuff"

// import { XExpectContext, IOnInvalidType } from "./interfaces/IExpectContext.p"
// import { TExpectIssue } from "./types/ExpectIssue.p"

// export type TExpectSeverity =
//     | ["warning", null]
//     | ["error", null]
//     | ["nothing", null]

// export type TOnDuplicateEntry =
//     | ["ignore", null]
//     | ["overwrite", null]


// export type TDiagnosticSeverity =
//     | ["warning", null]
//     | ["error", null]

// export type IIssueHandler<PAnnotation> = (
//     $: {
//         readonly "issue": TExpectIssue
//         readonly "severity": TDiagnosticSeverity
//         readonly "annotation": PAnnotation
//     }
// ) => void

// export type FCreateExpectContext = <PAnnotation>(
//     $: {
//         readonly "duplicateEntrySeverity": TExpectSeverity
//         readonly "onDuplicateEntry": TOnDuplicateEntry
//     },
//     $i: {
//         readonly "issueHandler": IIssueHandler<PAnnotation>
//         readonly "onInvalidType": IOnInvalidType<PAnnotation>
//     },
//     $d: {
//         //push: uglyStuff.Push,
//         includes: uglyStuff.FIncludes,
//         getElement: uglyStuff.FGetElement,
//         arrayLength: uglyStuff.FArrayLength,
//     },
// ) => XExpectContext<PAnnotation>

// export type CreateExpectIssueMessage_Data = {
//     issue: TExpectIssue
// }

// export type CreateExpectIssueMessage = (
//     $: CreateExpectIssueMessage_Data,
//     $d: {
//         getKeysAsString: ($: pt.Dictionary<null>) => string
//         getNumberOfKeysAsString: ($: pt.Dictionary<null>) => string
//     }
// ) => string