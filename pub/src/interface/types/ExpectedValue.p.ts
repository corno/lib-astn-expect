
export type TExpectedValueType =
    | ["array", null]
    | ["boolean", null]
    | ["dictionary", null]
    | ["list", null]
    | ["nothing", null]
    | ["null", null]
    | ["number", null]
    | ["object", null]
    | ["nonwrapped string", null]
    | ["quoted string", null]
    | ["shorthand group", null]
    | ["string", null]
    | ["tagged union", null]
    | ["type or shorthand group", null]
    | ["type", null]
    | ["verbose group", null]

export type TExpectedValue = {
    readonly "type": TExpectedValueType
    readonly "null allowed": boolean
}
