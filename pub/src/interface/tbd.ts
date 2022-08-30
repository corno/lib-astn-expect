
import { IExpectContext, OnInvalidType } from "./interfaces/IExpectContext"
import { ExpectIssue } from "./types/ExpectIssue"
import * as uglyStuff from "api-pareto-ugly-stuff"

export type ExpectSeverity =
    | ["warning", {}]
    | ["error", {}]
    | ["nothing", {}]

export type OnDuplicateEntry =
    | ["ignore", {}]
    | ["overwrite", {}]


export type DiagnosticSeverity =
    | ["warning", {}]
    | ["error", {}]

export type IssueHandler<Annotation> = (
    $: {
        issue: ExpectIssue
        severity: DiagnosticSeverity
        annotation: Annotation
    }
) => void

export type CreateExpectContext = <Annotation>(
    $: {
        duplicateEntrySeverity: ExpectSeverity
        onDuplicateEntry: OnDuplicateEntry
    },
    $i: {
        issueHandler: IssueHandler<Annotation>
        onInvalidType: OnInvalidType<Annotation>
    },
    $d: {
        push: uglyStuff.Push,
        includes: uglyStuff.Includes,
        getElement: uglyStuff.GetElement,
        arrayLength: uglyStuff.ArrayLength,
    },
) => IExpectContext<Annotation>

export type CreateExpectIssueMessage_Data = {
    issue: ExpectIssue
}

export type CreateExpectIssueMessage = (
    $: CreateExpectIssueMessage_Data,
) => string