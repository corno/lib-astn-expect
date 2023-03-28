

import { A } from "../api.generated"

export const $$: A.createExpectSimpleString = () => {

    return ($is) => {
        return {
            'array': ($) => {
                return $is.unexpected.array({
                    'expected': ['simple string', null],
                    'token': $,
                })
            },
            'multilineString': ($) => {
                $is.unexpected['multiline string']({
                    'expected': ['simple string', null],
                    'token': $,
                })
            },
            'object': ($) => {
                return $is.unexpected.object({
                    'expected': ['simple string', null],
                    'token': $,
                })
            },
            'simpleString': $is.handler,
            'taggedUnion': ($) => {
                return $is.unexpected['tagged union']({
                    'expected': ['simple string', null],
                    'token': $,
                })
            },
        }
    }
}