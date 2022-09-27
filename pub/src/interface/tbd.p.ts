
import { IExpectContext, OnInvalidType } from "./interfaces/IExpectContext"
import { ExpectIssue } from "./types/ExpectIssue"
import * as uglyStuff from "api-pareto-ugly-stuff"

export type ExpectSeverity =
    | ["warning", null]
    | ["error", null]
    | ["nothing", null]

export type OnDuplicateEntry =
    | ["ignore", null]
    | ["overwrite", null]


export type DiagnosticSeverity =
    | ["warning", null]
    | ["error", null]

export type IssueHandler<PAnnotation> = (
    $: {
        issue: ExpectIssue
        severity: DiagnosticSeverity
        annotation: Annotation
    }
) => void

export type CreateExpectContext = <PAnnotation>(
    $: {
        duplicateEntrySeverity: ExpectSeverity
        onDuplicateEntry: OnDuplicateEntry
    },
    $i: {
        issueHandler: IssueHandler<PAnnotation>
        onInvalidType: OnInvalidType<PAnnotation>
    },
    $d: {
        push: uglyStuff.Push,
        includes: uglyStuff.Includes,
        getElement: uglyStuff.GetElement,
        arrayLength: uglyStuff.ArrayLength,
    },
) => IExpectContext<PAnnotation>

export type CreateExpectIssueMessage_Data = {
    issue: ExpectIssue
}

export type CreateExpectIssueMessage = (
    $: CreateExpectIssueMessage_Data,
) => string