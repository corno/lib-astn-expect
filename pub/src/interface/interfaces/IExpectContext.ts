import * as sp from "api-astn-handlers"

export type ExpectedElement<Annotation> = {
    name: string
    getHandler: () => sp.IRequiredValueHandler<Annotation>
}

export type ExpectedElements<Annotation> = ExpectedElement<Annotation>[]

export type ExpectedProperty<Annotation> = {
    onExists: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => sp.IRequiredValueHandler<Annotation>
    onNotExists: null | (($: {
        beginToken: sp.OpenObjectToken<Annotation>
        endToken: sp.CloseObjectToken<Annotation>
    }) => void) //if onNotExists is null and the property does not exist, an error will be raised
}

export type ExpectedProperties<Annotation> = {
    [key: string]: ExpectedProperty<Annotation>
}

export type Options<Annotation> = {
    [key: string]: (
        taggedUnionToken: sp.TaggedUnionToken<Annotation>,
        optionData: sp.SimpleStringToken<Annotation>,
    ) => sp.IRequiredValueHandler<Annotation>
}

export type OnInvalidType<Annotation> = null | (($: {
    annotation: Annotation
}) => void)

export type ExpectDictionaryParameters<Annotation> = {
    onBegin?: ($: {
        token: sp.OpenObjectToken<Annotation>
    }) => void
    onProperty: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => sp.IRequiredValueHandler<Annotation>
    onEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}

export type ExpectListParameters<Annotation> = {
    onBegin?: ($: {
        token: sp.OpenArrayToken<Annotation>
    }) => void
    onElement: () => sp.IValueHandler<Annotation>
    onEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}

export type ExpectTaggedUnionParameters<Annotation> = {
    options?: Options<Annotation>
    onUnexpectedOption?: ($: {
        taggedUnionToken: sp.TaggedUnionToken<Annotation>
        optionToken: sp.SimpleStringToken<Annotation>
    }) => void
    onMissingOption?: () => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}

export type ExpectVerboseGroupParameters<Annotation> = {
    properties?: ExpectedProperties<Annotation>
    onBegin?: ($: {
        token: sp.OpenObjectToken<Annotation>
    }) => void
    onEnd?: ($: {
        hasErrors: boolean
        annotation: Annotation
    }) => void
    onUnexpectedProperty?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => sp.IRequiredValueHandler<Annotation>
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}

export type ExpectStringParameters<Annotation> = {
    callback: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}

export type ExpectQuotedStringParameters<Annotation> = {
    callback: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
    warningOnly?: boolean
}

export type ExpectNonwrappedStringParameters<Annotation> = {
    callback: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
    warningOnly?: boolean
}

export type ExpectShorthandGroupParameters<Annotation> = {
    elements?: ExpectedElements<Annotation>
    onBegin?: ($: {
        token: sp.OpenArrayToken<Annotation>
    }) => void
    onEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}

export type ExpectGroupParameters<Annotation> = {
    properties?: ExpectedProperties<Annotation>
    elements?: ExpectedElements<Annotation>
    onTypeBegin?: ($: {
        token: sp.OpenObjectToken<Annotation>
    }) => void
    onTypeEnd?: ($: {
        hasErrors: boolean
        annotation: Annotation
    }) => void
    onUnexpectedProperty?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => sp.IRequiredValueHandler<Annotation>
    onShorthandGroupBegin?: ($: {
        token: sp.OpenArrayToken<Annotation>
    }) => void
    onShorthandGroupEnd?: ($: {
        annotation: Annotation
    }) => void
    onInvalidType?: OnInvalidType<Annotation>
    onNull?: ($: {
        token: sp.SimpleStringToken<Annotation>
    }) => void
}
export type IExpectContext<Annotation> = {
    expectSimpleString($: ExpectStringParameters<Annotation>): sp.IValueHandler<Annotation>
    expectQuotedString($: ExpectQuotedStringParameters<Annotation>): sp.IValueHandler<Annotation>
    expectNonWrappedString($: ExpectNonwrappedStringParameters<Annotation>): sp.IValueHandler<Annotation>
    expectDictionary($: ExpectDictionaryParameters<Annotation>): sp.IValueHandler<Annotation>
    expectVerboseGroup($: ExpectVerboseGroupParameters<Annotation>): sp.IValueHandler<Annotation>
    expectList($: ExpectListParameters<Annotation>): sp.IValueHandler<Annotation>
    expectShorthandGroup($: ExpectShorthandGroupParameters<Annotation>): sp.IValueHandler<Annotation>
    expectGroup($: ExpectGroupParameters<Annotation>): sp.IValueHandler<Annotation>
    expectTaggedUnion($: ExpectTaggedUnionParameters<Annotation>): sp.IValueHandler<Annotation>

}