import * as pt from "pareto-core-types"

import { TExpectedValue, TExpectedValueType } from "./ExpectedValue.p"

export type TExpectedToken =
    | ["close angle bracket", null]
    | ["close bracket", null]
    | ["close curly", null]
    | ["close paren", null]
    | ["open angle bracket", null]
    | ["open bracket", null]
    | ["open curly", null]
    | ["open paren", null]


export type TExpectIssue =
    | ["array is not a list", null]
    | ["array is not a shorthand group", null]

    | ["object is not a verbose group", null]

    | ["object is not a dictionary", null]
    | ["invalid value type", {
        readonly "found": TExpectedValueType
        readonly "expected": TExpectedValue
    }]
    | ["invalid string", {
        readonly "found": string
        readonly "expected": TExpectedValue
    }]
    | ["expected token", {
        readonly "token": TExpectedToken
        readonly "found": string
    }]
    | ["duplicate entry", {
        readonly "key": string
    }]
    | ["duplicate property", {
        readonly "name": string
    }]
    | ["missing property", {
        readonly "name": string
    }]
    | ["unexpected property", {
        readonly "found key": string
        readonly "valid keys": pt.Dictionary<null>
    }]
    | ["not a valid number", {
        readonly "value": string
    }]
    | ["string is not quoted", null]
    | ["string should not have quotes or apostrophes", null]
    | ["superfluous element", null]
    | ["elements missing", {
        readonly "names": pt.Dictionary<null>
    }]
    | ["unknown option", {
        readonly "found": string
        readonly "valid options": pt.Dictionary<null>
    }]