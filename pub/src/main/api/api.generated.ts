import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CcreateUnexpectedHandler = glo.FCreateUnexpectedHandler

export type CexpectApostrophedString = glo.FExpectApostrophedString

export type CexpectArray = glo.FExpectArray

export type CexpectArrayOrObject = glo.FExpectArrayOrObject

export type CexpectDictionary = glo.FExpectDictionary

export type CexpectList = glo.FExpectList

export type CexpectMultilineString = glo.FExpectMultilineString

export type CexpectObject = glo.FExpectObject

export type CexpectQuotedString = glo.FExpectQuotedString

export type CexpectSimpleString = glo.FExpectSimpleString

export type CexpectTaggedUnion = glo.FExpectTaggedUnion

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