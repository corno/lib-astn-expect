import * as pt from "pareto-core-types"

import { ExpectedValue, ExpectedValueType } from "./ExpectedValue"

export type ExpectedToken =
| "close angle bracket"
| "close bracket"
| "close curly"
| "close paren"
| "open angle bracket"
| "open bracket"
| "open curly"
| "open paren"


export type ExpectIssue =
| ["array is not a list", { }]
| ["array is not a shorthand group", { }]

| ["object is not a verbose group", { }]

| ["object is not a dictionary", { }]
| ["invalid value type", {
    found: ExpectedValueType
    expected: ExpectedValue
}]
| ["invalid string", {
    found: string
    expected: ExpectedValue
}]
| ["expected token", {
    token: ExpectedToken
    found: string
}]
| ["duplicate entry", {
    key: string
}]
| ["duplicate property", {
    name: string
}]
| ["missing property", {
    name: string
}]
| ["unexpected property", {
    "found key": string
    "valid keys": pt.Dictionary<null>
}]
| ["not a valid number", {
    value: string
}]
| ["string is not quoted", { }]
| ["string should not have quotes or apostrophes", { }]
| ["superfluous element", { }]
| ["elements missing", {
    names: pt.Dictionary<null>
}]
| ["unknown option", {
    "found": string
    "valid options": pt.Dictionary<null>
}]