import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_h from "glo-astn-handlers"

export namespace N {}

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace Expected {
        
        export namespace array {}
        
        export type array<GAnnotation> = null
        
        export namespace array__or__object {}
        
        export type array__or__object<GAnnotation> = null
        
        export namespace multiline__string {}
        
        export type multiline__string<GAnnotation> = null
        
        export namespace _lobject {}
        
        export type _lobject<GAnnotation> = null
        
        export namespace simple__string {}
        
        export type simple__string<GAnnotation> = null
        
        export namespace tagged__union {}
        
        export type tagged__union<GAnnotation> = null
    }
    
    export type Expected<GAnnotation> = 
        | ['array', null]
        | ['array or object', null]
        | ['multiline string', null]
        | ['object', null]
        | ['simple string', null]
        | ['tagged union', null]
    
    export type UnexpectedArray<GAnnotation> = T.UnexpectedValue<GAnnotation, g_h.T.OpenArrayToken>
    
    export type UnexpectedMultilineString<GAnnotation> = T.UnexpectedValue<GAnnotation, g_h.T.MultilineStringToken>
    
    export type UnexpectedObject<GAnnotation> = T.UnexpectedValue<GAnnotation, g_h.T.OpenObjectToken>
    
    export type UnexpectedSimpleString<GAnnotation> = T.UnexpectedValue<GAnnotation, g_h.T.SimpleStringToken>
    
    export type UnexpectedTaggedUnion<GAnnotation> = T.UnexpectedValue<GAnnotation, g_h.T.TaggedUnionToken>
    
    export namespace UnexpectedValue {
        
        export type expected<GAnnotation, TToken> = T.Expected<GAnnotation>
        
        export type token<GAnnotation, TToken> = TToken
    }
    
    export type UnexpectedValue<GAnnotation, TToken> = {
        readonly 'expected': T.Expected<GAnnotation>
        readonly 'token': TToken
    }
    
    export namespace UnexpectedValueError {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export type expected<GAnnotation> = T.Expected<GAnnotation>
        
        export namespace found {
            
            export namespace array {}
            
            export type array<GAnnotation> = null
            
            export namespace multiline__string {}
            
            export type multiline__string<GAnnotation> = null
            
            export namespace _lobject {}
            
            export type _lobject<GAnnotation> = null
            
            export namespace simple__string {}
            
            export type simple__string<GAnnotation> = null
            
            export namespace tagged__union {}
            
            export type tagged__union<GAnnotation> = null
        }
        
        export type found<GAnnotation> = 
            | ['array', null]
            | ['multiline string', null]
            | ['object', null]
            | ['simple string', null]
            | ['tagged union', null]
    }
    
    export type UnexpectedValueError<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'expected': T.Expected<GAnnotation>
        readonly 'found': 
            | ['array', null]
            | ['multiline string', null]
            | ['object', null]
            | ['simple string', null]
            | ['tagged union', null]
    }
}