import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CcreateUnexpectedHandler = gthis.FCreateUnexpectedHandler

export type CexpectApostrophedString = gthis.FExpectApostrophedString

export type CexpectArray = gthis.FExpectArray

export type CexpectArrayOrObject = gthis.FExpectArrayOrObject

export type CexpectDictionary = gthis.FExpectDictionary

export type CexpectList = gthis.FExpectList

export type CexpectMultilineString = gthis.FExpectMultilineString

export type CexpectObject = gthis.FExpectObject

export type CexpectQuotedString = gthis.FExpectQuotedString

export type CexpectSimpleString = gthis.FExpectSimpleString

export type CexpectTaggedUnion = gthis.FExpectTaggedUnion

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