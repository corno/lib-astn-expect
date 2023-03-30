import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace ASYNC {
    
    export namespace I {
        
        export type OnUnexpectedValue<GAnnotation> = ($: T.UnexpectedValueError<GAnnotation>, ) => void
        
        export type UnexpectedValueHandler<GAnnotation> = {
            readonly 'array': ($: T.UnexpectedArray<GAnnotation>, ) => g_h.ASYNC.I.ArrayHandler<T.Annotation<GAnnotation>>
            readonly 'multiline string': ($: T.UnexpectedMultilineString<GAnnotation>, ) => void
            readonly 'object': ($: T.UnexpectedObject<GAnnotation>, ) => g_h.ASYNC.I.ObjectHandler<T.Annotation<GAnnotation>>
            readonly 'simple string': ($: T.UnexpectedSimpleString<GAnnotation>, ) => void
            readonly 'tagged union': ($: T.UnexpectedTaggedUnion<GAnnotation>, ) => g_h.ASYNC.I.TaggedUnionHandler<T.Annotation<GAnnotation>>
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateExpectArray<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnArray<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectArrayOrObject<GAnnotation> = {
                'construct': ($is: {
                    readonly 'arrayHandler': g_h.ASYNC.I.OnArray<T.Annotation<GAnnotation>>
                    readonly 'objectHandler': g_h.ASYNC.I.OnObject<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectDictionary<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnObject<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectList<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnArray<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectMultilineString<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnMultilineString<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectObject<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnObject<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectSimpleString<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnSimpleString<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateExpectTaggedUnion<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnTaggedUnion<T.Annotation<GAnnotation>>
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler<T.Annotation<GAnnotation>>
            }
        }
        
        
        export namespace C {
            export type CreateUnexpectedValueHandler<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': ASYNC.I.OnUnexpectedValue<GAnnotation>
                }) => ASYNC.I.UnexpectedValueHandler<GAnnotation>
            }
        }
    }
}

export namespace SYNC {}