import * as pt from "pareto-core-types"

import * as sp from "api-astn-handlers"

export type ExpectedElement<PAnnotation> = {
    name: string
    getHandler: () => sp.IRequiredValueHandler<PAnnotation>
}

export type IExpectedElements<PAnnotation> = ExpectedElement<PAnnotation>[]

export type IExpectedProperty<PAnnotation> = {
    onExists: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    onNotExists: null | (($: {
        beginToken: sp.TOpenObjectToken<PAnnotation>
        endToken: sp.TCloseObjectToken<PAnnotation>
    }) => void) //if onNotExists is null and the property does not exist, an error will be raised
}

export type IExpectedProperties<PAnnotation> = pt.Dictionary<IExpectedProperty<PAnnotation>>

export type Options<PAnnotation> = pt.Dictionary<($: {
    taggedUnionToken: sp.TTaggedUnionToken<PAnnotation>,
    optionData: sp.TSimpleStringToken<PAnnotation>,
}) => sp.IRequiredValueHandler<PAnnotation>>

export type IOnInvalidType<PAnnotation> = null | (($: {
    annotation: PAnnotation
}) => void)

export type ExpectDictionaryParameters<PAnnotation> = {
    onBegin?: ($: {
        token: sp.TOpenObjectToken<PAnnotation>
    }) => void
    onProperty: ($: {
        token: sp.TSimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    onEnd?: ($: {
        annotation: PAnnotation
    }) => void
    onInvalidType?: IOnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.TSimpleStringToken<PAnnotation>
    }) => void
}

export type IExpectListParameters<PAnnotation> = {
    onBegin?: ($: {
        token: sp.TOpenArrayToken<PAnnotation>
    }) => void
    onElement: () => sp.IValueHandler<PAnnotation>
    onEnd?: ($: {
        annotation: PAnnotation
    }) => void
    onInvalidType?: IOnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.TSimpleStringToken<PAnnotation>
    }) => void
}

export type IExpectTaggedUnionParameters<PAnnotation> = {
    options?: Options<PAnnotation>
    onUnexpectedOption?: ($: {
        taggedUnionToken: sp.TTaggedUnionToken<PAnnotation>
        optionToken: sp.TSimpleStringToken<PAnnotation>
    }) => void
    onMissingOption?: () => void
    onInvalidType?: IOnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.TSimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectVerboseGroupParameters<PAnnotation> = {
    readonly "properties"?: IExpectedProperties<PAnnotation>
    readonly "onBegin"?: ($: {
        readonly "token": sp.TOpenObjectToken<PAnnotation>
    }) => void
    readonly "onEnd"?: ($: {
        readonly "hasErrors": boolean
        readonly "annotation": PAnnotation
    }) => void
    readonly "onUnexpectedProperty"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    readonly "onInvalidType"?: IOnInvalidType<PAnnotation>
    readonly "onNull"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
}

export type IExpectStringParameters<PAnnotation> = {
    readonly "callback": ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
    readonly "onInvalidType"?: IOnInvalidType<PAnnotation>
    readonly "onNull"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
}

export type IExpectQuotedStringParameters<PAnnotation> = {
    readonly "callback": ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
    readonly "onInvalidType"?: IOnInvalidType<PAnnotation>
    readonly "onNull"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
    readonly "warningOnly"?: boolean
}

export type IExpectNonwrappedStringParameters<PAnnotation> = {
    readonly "callback": ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
    readonly "onInvalidType"?: IOnInvalidType<PAnnotation>
    readonly "onNull"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
    readonly "warningOnly"?: boolean
}

export type IExpectShorthandGroupParameters<PAnnotation> = {
    readonly "elements"?: IExpectedElements<PAnnotation>
    readonly "onBegin"?: ($: {
        readonly "token": sp.TOpenArrayToken<PAnnotation>
    }) => void
    readonly "onEnd"?: ($: {
        readonly "annotation": PAnnotation
    }) => void
    readonly "onInvalidType"?: IOnInvalidType<PAnnotation>
    readonly "onNull"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
}

export type IExpectGroupParameters<PAnnotation> = {
    readonly "properties"?: IExpectedProperties<PAnnotation>
    readonly "elements"?: IExpectedElements<PAnnotation>
    readonly "onTypeBegin"?: ($: {
        readonly "token": sp.TOpenObjectToken<PAnnotation>
    }) => void
    readonly "onTypeEnd"?: ($: {
        readonly "hasErrors": boolean
        readonly "annotation": PAnnotation
    }) => void
    readonly "onUnexpectedProperty"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    readonly "onShorthandGroupBegin"?: ($: {
        readonly "token": sp.TOpenArrayToken<PAnnotation>
    }) => void
    readonly "onShorthandGroupEnd"?: ($: {
        readonly "annotation": PAnnotation
    }) => void
    readonly "onInvalidType"?: IOnInvalidType<PAnnotation>
    readonly "onNull"?: ($: {
        readonly "token": sp.TSimpleStringToken<PAnnotation>
    }) => void
}


export type XExpectContext<PAnnotation> = {
    expectSimpleString($i: IExpectStringParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectQuotedString($i: IExpectQuotedStringParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectNonWrappedString($i: IExpectNonwrappedStringParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectDictionary($i: ExpectDictionaryParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectVerboseGroup($i: ExpectVerboseGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectList($i: IExpectListParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectShorthandGroup($i: IExpectShorthandGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectGroup($i: IExpectGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectTaggedUnion($i: IExpectTaggedUnionParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
}