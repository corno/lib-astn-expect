

import { expectMultilineString } from "../definition/api.generated"

export const $$:expectMultilineString = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['multiline string', null],
                'token': $,
            })
        },
        'multilineString': $i.handler,
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['multiline string', null],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['multiline string', null],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['multiline string', null],
                'token': $,
            })
        },
    }
}