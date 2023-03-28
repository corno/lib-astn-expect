

import { A } from "../api.generated"

export const $$: A.createExpectTaggedUnion = () => {
    return ($is) => {
        return {
            'array': ($) => {
                return $is.unexpected.array({
                    'expected': ['tagged union', null],
                    'token': $,
                })
            },
            'multilineString': ($) => {
                $is.unexpected['multiline string']({
                    'expected': ['tagged union', null],
                    'token': $,
                })
            },
            'object': ($) => {
                return $is.unexpected.object({
                    'expected': ['tagged union', null],
                    'token': $,
                })
            },
            'simpleString': ($) => {
                $is.unexpected['simple string']({
                    'expected': ['tagged union', null],
                    'token': $,
                })
            },
            'taggedUnion': $is.handler,
        }
    }
}