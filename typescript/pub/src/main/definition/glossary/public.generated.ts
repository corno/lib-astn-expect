import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gh from "glo-astn-handlers"

export type IExpectApostrophedString<GPAnnotation> = {
    'handler': gh.IOnSimpleString<T.Annotation<GPAnnotation>>
    'unexpected': ($: gcommon.T.Null, ) => void
}

export type IExpectArray<GPAnnotation> = {
    'handler': gh.IOnArray<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectArrayOrObject<GPAnnotation> = {
    'arrayHandler': gh.IOnArray<T.Annotation<GPAnnotation>>
    'objectHandler': gh.IOnObject<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectDictionary<GPAnnotation> = {
    'handler': gh.IOnObject<T.Annotation<GPAnnotation>>
    'unexpected': ($: gcommon.T.Null, ) => void
}

export type IExpectList<GPAnnotation> = {
    'handler': gh.IOnArray<T.Annotation<GPAnnotation>>
    'unexpected': ($: gcommon.T.Null, ) => void
}

export type IExpectMultilineString<GPAnnotation> = {
    'handler': gh.IOnMultilineString<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectObject<GPAnnotation> = {
    'handler': gh.IOnObject<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectQuotedString<GPAnnotation> = {
    'handler': gh.IOnSimpleString<T.Annotation<GPAnnotation>>
    'unexpected': ($: gcommon.T.Null, ) => void
}

export type IExpectSimpleString<GPAnnotation> = {
    'handler': gh.IOnSimpleString<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectTaggedUnion<GPAnnotation> = {
    'handler': gh.IOnTaggedUnion<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IOnUnexpectedValue<GPAnnotation> = ($: T.UnexpectedValueError<GPAnnotation>, ) => void

export type IUnexpectedValueHandler<GPAnnotation> = {
    'array': ($: T.UnexpectedArray<GPAnnotation>, ) => gh.IArrayHandler<T.Annotation<GPAnnotation>>
    'multiline string': ($: T.UnexpectedMultilineString<GPAnnotation>, ) => void
    'object': ($: T.UnexpectedObject<GPAnnotation>, ) => gh.IObjectHandler<T.Annotation<GPAnnotation>>
    'simple string': ($: T.UnexpectedSimpleString<GPAnnotation>, ) => void
    'tagged union': ($: T.UnexpectedTaggedUnion<GPAnnotation>, ) => gh.ITaggedUnionHandler<T.Annotation<GPAnnotation>>
}

export type FCreateUnexpectedHandler = <GPAnnotation>($: gcommon.T.Null, $i: IOnUnexpectedValue<GPAnnotation>,) => IUnexpectedValueHandler<GPAnnotation>

export type FExpectApostrophedString = <GPAnnotation>($: gcommon.T.Null, $i: IExpectApostrophedString<GPAnnotation>,) => gh.IOnSimpleString<T.Annotation<GPAnnotation>>

export type FExpectArray = <GPAnnotation>($: gcommon.T.Null, $i: IExpectArray<GPAnnotation>,) => gh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectArrayOrObject = <GPAnnotation>($: gcommon.T.Null, $i: IExpectArrayOrObject<GPAnnotation>,) => gh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectDictionary = <GPAnnotation>($: gcommon.T.Null, $i: IExpectDictionary<GPAnnotation>,) => gh.IOnObject<T.Annotation<GPAnnotation>>

export type FExpectList = <GPAnnotation>($: gcommon.T.Null, $i: IExpectList<GPAnnotation>,) => gh.IOnArray<T.Annotation<GPAnnotation>>

export type FExpectMultilineString = <GPAnnotation>($: gcommon.T.Null, $i: IExpectMultilineString<GPAnnotation>,) => gh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectObject = <GPAnnotation>($: gcommon.T.Null, $i: IExpectObject<GPAnnotation>,) => gh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectQuotedString = <GPAnnotation>($: gcommon.T.Null, $i: IExpectQuotedString<GPAnnotation>,) => gh.IOnSimpleString<T.Annotation<GPAnnotation>>

export type FExpectSimpleString = <GPAnnotation>($: gcommon.T.Null, $i: IExpectSimpleString<GPAnnotation>,) => gh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectTaggedUnion = <GPAnnotation>($: gcommon.T.Null, $i: IExpectTaggedUnion<GPAnnotation>,) => gh.IValueHandler<T.Annotation<GPAnnotation>>