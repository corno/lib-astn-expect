

import { A } from "../api.generated"

export const $$: A.createExpectObject = () => {
    return ($is) => {
        return {
            'array': ($) => {
                return $is.unexpected.array({
                    'expected': ['object', null],
                    'token': $,
                })
            },
            'multilineString': ($) => {
                $is.unexpected['multiline string']({
                    'expected': ['object', null],
                    'token': $,
                })
            },
            'object': $is.handler,
            'simpleString': ($) => {
                $is.unexpected['simple string']({
                    'expected': ['object', null],
                    'token': $,
                })
            },
            'taggedUnion': ($) => {
                return $is.unexpected['tagged union']({
                    'expected': ['object', null],
                    'token': $,
                })
            },
        }
    }
}