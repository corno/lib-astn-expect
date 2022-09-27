import * as sp from "api-astn-handlers"

export type ExpectedElement<PAnnotation> = {
    name: string
    getHandler: () => sp.IRequiredValueHandler<PAnnotation>
}

export type ExpectedElements<PAnnotation> = ExpectedElement<PAnnotation>[]

export type ExpectedProperty<PAnnotation> = {
    onExists: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    onNotExists: null | (($: {
        beginToken: sp.OpenObjectToken<PAnnotation>
        endToken: sp.CloseObjectToken<PAnnotation>
    }) => void) //if onNotExists is null and the property does not exist, an error will be raised
}

export type ExpectedProperties<PAnnotation> = {
    [key: string]: ExpectedProperty<PAnnotation>
}

export type Options<PAnnotation> = {
    [key: string]: (
        taggedUnionToken: sp.TaggedUnionToken<PAnnotation>,
        optionData: sp.SimpleStringToken<PAnnotation>,
    ) => sp.IRequiredValueHandler<PAnnotation>
}

export type OnInvalidType<PAnnotation> = null | (($: {
    annotation: Annotation
}) => void)

export type ExpectDictionaryParameters<PAnnotation> = {
    onBegin?: ($: {
        token: sp.OpenObjectToken<PAnnotation>
    }) => void
    onProperty: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    onEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectListParameters<PAnnotation> = {
    onBegin?: ($: {
        token: sp.OpenArrayToken<PAnnotation>
    }) => void
    onElement: () => sp.IValueHandler<PAnnotation>
    onEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectTaggedUnionParameters<PAnnotation> = {
    options?: Options<PAnnotation>
    onUnexpectedOption?: ($: {
        taggedUnionToken: sp.TaggedUnionToken<PAnnotation>
        optionToken: sp.SimpleStringToken<PAnnotation>
    }) => void
    onMissingOption?: () => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectVerboseGroupParameters<PAnnotation> = {
    properties?: ExpectedProperties<PAnnotation>
    onBegin?: ($: {
        token: sp.OpenObjectToken<PAnnotation>
    }) => void
    onEnd?: ($: {
        hasErrors: boolean
        annotation: Annotation
    }) => void
    onUnexpectedProperty?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectStringParameters<PAnnotation> = {
    callback: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectQuotedStringParameters<PAnnotation> = {
    callback: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
    warningOnly?: boolean
}

export type ExpectNonwrappedStringParameters<PAnnotation> = {
    callback: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
    warningOnly?: boolean
}

export type ExpectShorthandGroupParameters<PAnnotation> = {
    elements?: ExpectedElements<PAnnotation>
    onBegin?: ($: {
        token: sp.OpenArrayToken<PAnnotation>
    }) => void
    onEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}

export type ExpectGroupParameters<PAnnotation> = {
    properties?: ExpectedProperties<PAnnotation>
    elements?: ExpectedElements<PAnnotation>
    onTypeBegin?: ($: {
        token: sp.OpenObjectToken<PAnnotation>
    }) => void
    onTypeEnd?: ($: {
        hasErrors: boolean
        annotation: Annotation
    }) => void
    onUnexpectedProperty?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => sp.IRequiredValueHandler<PAnnotation>
    onShorthandGroupBegin?: ($: {
        token: sp.OpenArrayToken<PAnnotation>
    }) => void
    onShorthandGroupEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<PAnnotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<PAnnotation>
    }) => void
}
export type IExpectContext<PAnnotation> = {
    expectSimpleString($: ExpectStringParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectQuotedString($: ExpectQuotedStringParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectNonWrappedString($: ExpectNonwrappedStringParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectDictionary($: ExpectDictionaryParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectVerboseGroup($: ExpectVerboseGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectList($: ExpectListParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectShorthandGroup($: ExpectShorthandGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectGroup($: ExpectGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
    expectTaggedUnion($: ExpectTaggedUnionParameters<PAnnotation>): sp.IValueHandler<PAnnotation>

}