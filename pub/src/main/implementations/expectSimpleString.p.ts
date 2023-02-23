

import { CexpectSimpleString } from "../api"

export const $$:CexpectSimpleString = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['simple string', {}],
                'token': $,
            })
        },
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['simple string', {}],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['simple string', {}],
                'token': $,
            })
        },
        'simpleString': $i.handler,
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['simple string', {}],
                'token': $,
            })
        },
    }
}