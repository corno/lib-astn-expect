import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gh from "glo-astn-handlers"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Expected {
        
        export namespace array {}
        
        export type array<GPAnnotation> = null
        
        export namespace array__or__object {}
        
        export type array__or__object<GPAnnotation> = null
        
        export namespace multiline__string {}
        
        export type multiline__string<GPAnnotation> = null
        
        export namespace _lobject {}
        
        export type _lobject<GPAnnotation> = null
        
        export namespace simple__string {}
        
        export type simple__string<GPAnnotation> = null
        
        export namespace tagged__union {}
        
        export type tagged__union<GPAnnotation> = null
    }
    
    export type Expected<GPAnnotation> = 
        | ['array', null]
        | ['array or object', null]
        | ['multiline string', null]
        | ['object', null]
        | ['simple string', null]
        | ['tagged union', null]
    
    export type UnexpectedArray<GPAnnotation> = T.UnexpectedValue<GPAnnotation, gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedMultilineString<GPAnnotation> = T.UnexpectedValue<GPAnnotation, gh.T.MultilineStringToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedObject<GPAnnotation> = T.UnexpectedValue<GPAnnotation, gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedSimpleString<GPAnnotation> = T.UnexpectedValue<GPAnnotation, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedTaggedUnion<GPAnnotation> = T.UnexpectedValue<GPAnnotation, gh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>>
    
    export namespace UnexpectedValue {
        
        export type expected<GPAnnotation, AToken> = T.Expected<GPAnnotation>
        
        export type token<GPAnnotation, AToken> = AToken
    }
    
    export type UnexpectedValue<GPAnnotation, AToken> = {
        readonly 'expected': T.Expected<GPAnnotation>
        readonly 'token': AToken
    }
    
    export namespace UnexpectedValueError {
        
        export type annotation<GPAnnotation> = GPAnnotation
        
        export type expected<GPAnnotation> = T.Expected<GPAnnotation>
        
        export namespace found {
            
            export namespace array {}
            
            export type array<GPAnnotation> = null
            
            export namespace multiline__string {}
            
            export type multiline__string<GPAnnotation> = null
            
            export namespace _lobject {}
            
            export type _lobject<GPAnnotation> = null
            
            export namespace simple__string {}
            
            export type simple__string<GPAnnotation> = null
            
            export namespace tagged__union {}
            
            export type tagged__union<GPAnnotation> = null
        }
        
        export type found<GPAnnotation> = 
            | ['array', null]
            | ['multiline string', null]
            | ['object', null]
            | ['simple string', null]
            | ['tagged union', null]
    }
    
    export type UnexpectedValueError<GPAnnotation> = {
        readonly 'annotation': GPAnnotation
        readonly 'expected': T.Expected<GPAnnotation>
        readonly 'found': 
            | ['array', null]
            | ['multiline string', null]
            | ['object', null]
            | ['simple string', null]
            | ['tagged union', null]
    }
}