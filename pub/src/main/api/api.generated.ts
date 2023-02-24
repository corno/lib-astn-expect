import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CcreateUnexpectedHandler = gglo.FCreateUnexpectedHandler

export type CexpectApostrophedString = gglo.FExpectApostrophedString

export type CexpectArray = gglo.FExpectArray

export type CexpectArrayOrObject = gglo.FExpectArrayOrObject

export type CexpectDictionary = gglo.FExpectDictionary

export type CexpectList = gglo.FExpectList

export type CexpectMultilineString = gglo.FExpectMultilineString

export type CexpectObject = gglo.FExpectObject

export type CexpectQuotedString = gglo.FExpectQuotedString

export type CexpectSimpleString = gglo.FExpectSimpleString

export type CexpectTaggedUnion = gglo.FExpectTaggedUnion

export type API = {
    createUnexpectedHandler: CcreateUnexpectedHandler
    expectApostrophedString: CexpectApostrophedString
    expectArray: CexpectArray
    expectArrayOrObject: CexpectArrayOrObject
    expectDictionary: CexpectDictionary
    expectList: CexpectList
    expectMultilineString: CexpectMultilineString
    expectObject: CexpectObject
    expectQuotedString: CexpectQuotedString
    expectSimpleString: CexpectSimpleString
    expectTaggedUnion: CexpectTaggedUnion
}