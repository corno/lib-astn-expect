

import { expectTaggedUnion } from "../definition/api.generated"

export const $$:expectTaggedUnion = ($, $i) => {
    return {
        'array': ($) => {
            return $i.unexpected.array({
                'expected': ['tagged union', null],
                'token': $,
            })
        },
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['tagged union', null],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['tagged union', null],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['tagged union', null],
                'token': $,
            })
        },
        'taggedUnion': $i.handler,
    }
}