

import { A } from "../api.generated"

export const $$: A.createExpectArray = () => {
    return ($is) => {
        return {
            'array': $is.handler,
            'multilineString': ($) => {
                $is.unexpected['multiline string']({
                    'expected': ['array', null],
                    'token': $,
                })
            },
            'object': ($) => {
                return $is.unexpected.object({
                    'expected': ['array', null],
                    'token': $,
                })
            },
            'simpleString': ($) => {
                $is.unexpected['simple string']({
                    'expected': ['array', null],
                    'token': $,
                })
            },
            'taggedUnion': ($) => {
                return $is.unexpected['tagged union']({
                    'expected': ['array', null],
                    'token': $,
                })
            },
        }
    }
}