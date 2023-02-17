import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CexpectArrayOrObject = ($, $i) => {
    return {
        'array': $i.arrayHandler,
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['array or object', {}],
                'token': $,
            })
        },
        'object': $i.objectHandler,
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['array or object', {}],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['array or object', {}],
                'token': $,
            })
        },
    }
}