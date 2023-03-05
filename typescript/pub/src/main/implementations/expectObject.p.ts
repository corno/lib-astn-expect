

import { expectObject } from "../definition/api.generated"

export const $$:expectObject = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['object', null],
                'token': $,
            })
        },
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['object', null],
                'token': $,
            })
        },
        'object': $i.handler,
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['object', null],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['object', null],
                'token': $,
            })
        },
    }
}