

import { CexpectObject } from "../api"

export const $$:CexpectObject = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['object', {}],
                'token': $,
            })
        },
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['object', {}],
                'token': $,
            })
        },
        'object': $i.handler,
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['object', {}],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['object', {}],
                'token': $,
            })
        },
    }
}