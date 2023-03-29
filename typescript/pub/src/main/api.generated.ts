import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
    
}

export namespace A {
    
    export type createExpectArray = <GAnnotation>() => g_this.ASYNC.A.C.CreateExpectArray<GAnnotation>
    
    export type createExpectArrayOrObject = <GAnnotation>() => g_this.ASYNC.A.C.CreateExpectArrayOrObject<GAnnotation>
    
    export type createExpectMultilineString = <GAnnotation>() => g_this.ASYNC.A.C.CreateExpectMultilineString<GAnnotation>
    
    export type createExpectObject = <GAnnotation>() => g_this.ASYNC.A.C.CreateExpectObject<GAnnotation>
    
    export type createExpectSimpleString = <GAnnotation>() => g_this.ASYNC.A.C.CreateExpectSimpleString<GAnnotation>
    
    export type createExpectTaggedUnion = <GAnnotation>() => g_this.ASYNC.A.C.CreateExpectTaggedUnion<GAnnotation>
    
    export type createUnexpectedValueHandler = <GAnnotation>() => g_this.ASYNC.A.C.CreateUnexpectedValueHandler<GAnnotation>
}

export type API = {
    readonly 'createExpectArray': A.createExpectArray
    readonly 'createExpectArrayOrObject': A.createExpectArrayOrObject
    readonly 'createExpectMultilineString': A.createExpectMultilineString
    readonly 'createExpectObject': A.createExpectObject
    readonly 'createExpectSimpleString': A.createExpectSimpleString
    readonly 'createExpectTaggedUnion': A.createExpectTaggedUnion
    readonly 'createUnexpectedValueHandler': A.createUnexpectedValueHandler
}