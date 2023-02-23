

import { CexpectTaggedUnion } from "../api"

export const $$:CexpectTaggedUnion = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['tagged union', {}],
                'token': $,
            })
        },
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['tagged union', {}],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['tagged union', {}],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['tagged union', {}],
                'token': $,
            })
        },
        'taggedUnion': $i.handler,
    }
}