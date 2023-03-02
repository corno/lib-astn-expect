

import { CexpectArray } from "../definition/api.generated"

export const $$:CexpectArray = ($, $i) => {
    return {
        'array': $i.handler,
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['array', {}],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['array', {}],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['array', {}],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['array', {}],
                'token': $,
            })
        },
    }
}