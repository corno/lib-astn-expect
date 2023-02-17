import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mh from "glo-astn-handlers"

export type IExpectApostrophedString<GPAnnotation> = {
    'handler': mh.IOnSimpleString<T.Annotation<GPAnnotation>>
    'unexpected': ($: mcommon.T.Null, ) => void
}

export type IExpectArray<GPAnnotation> = {
    'handler': mh.IOnArray<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectArrayOrObject<GPAnnotation> = {
    'arrayHandler': mh.IOnArray<T.Annotation<GPAnnotation>>
    'objectHandler': mh.IOnObject<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectDictionary<GPAnnotation> = {
    'handler': mh.IOnObject<T.Annotation<GPAnnotation>>
    'unexpected': ($: mcommon.T.Null, ) => void
}

export type IExpectList<GPAnnotation> = {
    'handler': mh.IOnArray<T.Annotation<GPAnnotation>>
    'unexpected': ($: mcommon.T.Null, ) => void
}

export type IExpectMultilineString<GPAnnotation> = {
    'handler': mh.IOnMultilineString<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectObject<GPAnnotation> = {
    'handler': mh.IOnObject<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectQuotedString<GPAnnotation> = {
    'handler': mh.IOnSimpleString<T.Annotation<GPAnnotation>>
    'unexpected': ($: mcommon.T.Null, ) => void
}

export type IExpectSimpleString<GPAnnotation> = {
    'handler': mh.IOnSimpleString<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IExpectTaggedUnion<GPAnnotation> = {
    'handler': mh.IOnTaggedUnion<T.Annotation<GPAnnotation>>
    'unexpected': IUnexpectedValueHandler<GPAnnotation>
}

export type IOnUnexpectedValue<GPAnnotation> = ($: T.UnexpectedValueError<GPAnnotation>, ) => void

export type IUnexpectedValueHandler<GPAnnotation> = {
    'array': ($: T.UnexpectedArray<GPAnnotation>, ) => mh.IArrayHandler<T.Annotation<GPAnnotation>>
    'multiline string': ($: T.UnexpectedMultilineString<GPAnnotation>, ) => void
    'object': ($: T.UnexpectedObject<GPAnnotation>, ) => mh.IObjectHandler<T.Annotation<GPAnnotation>>
    'simple string': ($: T.UnexpectedSimpleString<GPAnnotation>, ) => void
    'tagged union': ($: T.UnexpectedTaggedUnion<GPAnnotation>, ) => mh.ITaggedUnionHandler<T.Annotation<GPAnnotation>>
}

export type FCreateUnexpectedHandler = <GPAnnotation>($: mcommon.T.Null, $i: IOnUnexpectedValue<GPAnnotation>,) => IUnexpectedValueHandler<GPAnnotation>

export type FExpectApostrophedString = <GPAnnotation>($: mcommon.T.Null, $i: IExpectApostrophedString<GPAnnotation>,) => mh.IOnSimpleString<T.Annotation<GPAnnotation>>

export type FExpectArray = <GPAnnotation>($: mcommon.T.Null, $i: IExpectArray<GPAnnotation>,) => mh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectArrayOrObject = <GPAnnotation>($: mcommon.T.Null, $i: IExpectArrayOrObject<GPAnnotation>,) => mh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectDictionary = <GPAnnotation>($: mcommon.T.Null, $i: IExpectDictionary<GPAnnotation>,) => mh.IOnObject<T.Annotation<GPAnnotation>>

export type FExpectList = <GPAnnotation>($: mcommon.T.Null, $i: IExpectList<GPAnnotation>,) => mh.IOnArray<T.Annotation<GPAnnotation>>

export type FExpectMultilineString = <GPAnnotation>($: mcommon.T.Null, $i: IExpectMultilineString<GPAnnotation>,) => mh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectObject = <GPAnnotation>($: mcommon.T.Null, $i: IExpectObject<GPAnnotation>,) => mh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectQuotedString = <GPAnnotation>($: mcommon.T.Null, $i: IExpectQuotedString<GPAnnotation>,) => mh.IOnSimpleString<T.Annotation<GPAnnotation>>

export type FExpectSimpleString = <GPAnnotation>($: mcommon.T.Null, $i: IExpectSimpleString<GPAnnotation>,) => mh.IValueHandler<T.Annotation<GPAnnotation>>

export type FExpectTaggedUnion = <GPAnnotation>($: mcommon.T.Null, $i: IExpectTaggedUnion<GPAnnotation>,) => mh.IValueHandler<T.Annotation<GPAnnotation>>