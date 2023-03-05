import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type CreateUnexpectedHandler = <GAnnotation>($: g_common.T.Null, $b: B.OnUnexpectedValue<GAnnotation>,) => I.UnexpectedValueHandler<GAnnotation>
    
    export type ExpectApostrophedString = <GAnnotation>($: g_common.T.Null, $b: B.ExpectApostrophedString<GAnnotation>,) => g_h.I.OnSimpleString<T.Annotation<GAnnotation>>
    
    export type ExpectArray = <GAnnotation>($: g_common.T.Null, $b: B.ExpectArray<GAnnotation>,) => g_h.I.ValueHandler<T.Annotation<GAnnotation>>
    
    export type ExpectArrayOrObject = <GAnnotation>($: g_common.T.Null, $b: B.ExpectArrayOrObject<GAnnotation>,) => g_h.I.ValueHandler<T.Annotation<GAnnotation>>
    
    export type ExpectDictionary = <GAnnotation>($: g_common.T.Null, $b: B.ExpectDictionary<GAnnotation>,) => g_h.I.OnObject<T.Annotation<GAnnotation>>
    
    export type ExpectList = <GAnnotation>($: g_common.T.Null, $b: B.ExpectList<GAnnotation>,) => g_h.I.OnArray<T.Annotation<GAnnotation>>
    
    export type ExpectMultilineString = <GAnnotation>($: g_common.T.Null, $b: B.ExpectMultilineString<GAnnotation>,) => g_h.I.ValueHandler<T.Annotation<GAnnotation>>
    
    export type ExpectObject = <GAnnotation>($: g_common.T.Null, $b: B.ExpectObject<GAnnotation>,) => g_h.I.ValueHandler<T.Annotation<GAnnotation>>
    
    export type ExpectQuotedString = <GAnnotation>($: g_common.T.Null, $b: B.ExpectQuotedString<GAnnotation>,) => g_h.I.OnSimpleString<T.Annotation<GAnnotation>>
    
    export type ExpectSimpleString = <GAnnotation>($: g_common.T.Null, $b: B.ExpectSimpleString<GAnnotation>,) => g_h.I.ValueHandler<T.Annotation<GAnnotation>>
    
    export type ExpectTaggedUnion = <GAnnotation>($: g_common.T.Null, $b: B.ExpectTaggedUnion<GAnnotation>,) => g_h.I.ValueHandler<T.Annotation<GAnnotation>>
}