import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace ASYNC {
    
    export namespace I {
        
        export type OnUnexpectedValue<GAnnotation> = ($: T.UnexpectedValueError<GAnnotation>, ) => void
        
        export type UnexpectedValueHandler<GAnnotation> = {
            readonly 'array': ($: T.UnexpectedArray<GAnnotation>, ) => g_h.ASYNC.I.ArrayHandler
            readonly 'multiline string': ($: T.UnexpectedMultilineString<GAnnotation>, ) => void
            readonly 'object': ($: T.UnexpectedObject<GAnnotation>, ) => g_h.ASYNC.I.ObjectHandler
            readonly 'simple string': ($: T.UnexpectedSimpleString<GAnnotation>, ) => void
            readonly 'tagged union': ($: T.UnexpectedTaggedUnion<GAnnotation>, ) => g_h.ASYNC.I.TaggedUnionHandler
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateExpectArray<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnArray
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectArrayOrObject<GAnnotation> = {
                'construct': ($is: {
                    readonly 'arrayHandler': g_h.ASYNC.I.OnArray
                    readonly 'objectHandler': g_h.ASYNC.I.OnObject
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectDictionary<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnObject
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectList<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnArray
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectMultilineString<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnMultilineString
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectObject<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnObject
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectSimpleString<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnSimpleString
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
            }
        }
        
        
        export namespace C {
            export type CreateExpectTaggedUnion<GAnnotation> = {
                'construct': ($is: {
                    readonly 'handler': g_h.ASYNC.I.OnTaggedUnion
                    readonly 'unexpected': ASYNC.I.UnexpectedValueHandler<GAnnotation>
                }) => g_h.ASYNC.I.ValueHandler
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