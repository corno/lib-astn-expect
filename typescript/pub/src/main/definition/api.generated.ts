import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type createUnexpectedHandler = g_this.F.CreateUnexpectedHandler

export type expectApostrophedString = g_this.F.ExpectApostrophedString

export type expectArray = g_this.F.ExpectArray

export type expectArrayOrObject = g_this.F.ExpectArrayOrObject

export type expectDictionary = g_this.F.ExpectDictionary

export type expectList = g_this.F.ExpectList

export type expectMultilineString = g_this.F.ExpectMultilineString

export type expectObject = g_this.F.ExpectObject

export type expectQuotedString = g_this.F.ExpectQuotedString

export type expectSimpleString = g_this.F.ExpectSimpleString

export type expectTaggedUnion = g_this.F.ExpectTaggedUnion

export type API = {
    createUnexpectedHandler: createUnexpectedHandler
    expectApostrophedString: expectApostrophedString
    expectArray: expectArray
    expectArrayOrObject: expectArrayOrObject
    expectDictionary: expectDictionary
    expectList: expectList
    expectMultilineString: expectMultilineString
    expectObject: expectObject
    expectQuotedString: expectQuotedString
    expectSimpleString: expectSimpleString
    expectTaggedUnion: expectTaggedUnion
}