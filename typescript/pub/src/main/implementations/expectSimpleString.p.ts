

import { expectSimpleString } from "../definition/api.generated"

export const $$:expectSimpleString = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['simple string', null],
                'token': $,
            })
        },
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['simple string', null],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['simple string', null],
                'token': $,
            })
        },
        'simpleString': $i.handler,
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['simple string', null],
                'token': $,
            })
        },
    }
}