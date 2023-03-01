

import { CexpectMultilineString } from "../api"

export const $$:CexpectMultilineString = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['multiline string', {}],
                'token': $,
            })
        },
        'multilineString': $i.handler,
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['multiline string', {}],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['multiline string', {}],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['multiline string', {}],
                'token': $,
            })
        },
    }
}