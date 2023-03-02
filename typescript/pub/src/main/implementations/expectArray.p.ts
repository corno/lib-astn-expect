

import { CexpectArray } from "../definition/api.generated"

export const $$:CexpectArray = ($, $i) => {
    return {
        'array': $i.handler,
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['array', null],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['array', null],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['array', null],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['array', null],
                'token': $,
            })
        },
    }
}