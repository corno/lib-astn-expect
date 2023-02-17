import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mh from "glo-astn-handlers"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Expected {
        
        export namespace array {}
        
        export type array<GPAnnotation> = {}
        
        export namespace array__or__object {}
        
        export type array__or__object<GPAnnotation> = {}
        
        export namespace multiline__string {}
        
        export type multiline__string<GPAnnotation> = {}
        
        export namespace _lobject {}
        
        export type _lobject<GPAnnotation> = {}
        
        export namespace simple__string {}
        
        export type simple__string<GPAnnotation> = {}
        
        export namespace tagged__union {}
        
        export type tagged__union<GPAnnotation> = {}
    }
    
    export type Expected<GPAnnotation> = 
        | ['array', {}]
        | ['array or object', {}]
        | ['multiline string', {}]
        | ['object', {}]
        | ['simple string', {}]
        | ['tagged union', {}]
    
    export type UnexpectedArray<GPAnnotation> = T.UnexpectedValue<GPAnnotation, mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedMultilineString<GPAnnotation> = T.UnexpectedValue<GPAnnotation, mh.T.MultilineStringToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedObject<GPAnnotation> = T.UnexpectedValue<GPAnnotation, mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedSimpleString<GPAnnotation> = T.UnexpectedValue<GPAnnotation, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>>
    
    export type UnexpectedTaggedUnion<GPAnnotation> = T.UnexpectedValue<GPAnnotation, mh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>>
    
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
            
            export type array<GPAnnotation> = {}
            
            export namespace multiline__string {}
            
            export type multiline__string<GPAnnotation> = {}
            
            export namespace _lobject {}
            
            export type _lobject<GPAnnotation> = {}
            
            export namespace simple__string {}
            
            export type simple__string<GPAnnotation> = {}
            
            export namespace tagged__union {}
            
            export type tagged__union<GPAnnotation> = {}
        }
        
        export type found<GPAnnotation> = 
            | ['array', {}]
            | ['multiline string', {}]
            | ['object', {}]
            | ['simple string', {}]
            | ['tagged union', {}]
    }
    
    export type UnexpectedValueError<GPAnnotation> = {
        readonly 'annotation': GPAnnotation
        readonly 'expected': T.Expected<GPAnnotation>
        readonly 'found': 
            | ['array', {}]
            | ['multiline string', {}]
            | ['object', {}]
            | ['simple string', {}]
            | ['tagged union', {}]
    }
}