

import { A } from "../api.generated"

export const $$: A.createExpectArrayOrObject = () => {

    return ($is) => {
        return {
            'array': $is.arrayHandler,
            'multilineString': ($) => {
                $is.unexpected['multiline string']({
                    'expected': ['array or object', null],
                    'token': $,
                })
            },
            'object': $is.objectHandler,
            'simpleString': ($) => {
                $is.unexpected['simple string']({
                    'expected': ['array or object', null],
                    'token': $,
                })
            },
            'taggedUnion': ($) => {
                return $is.unexpected['tagged union']({
                    'expected': ['array or object', null],
                    'token': $,
                })
            },
        }
    }
}