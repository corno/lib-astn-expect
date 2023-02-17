import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CexpectArray = ($, $i) => {
    return {
        'array': $i.handler,
        'multilineString': ($) => {
            $i.unexpected['multiline string']({
                'expected': ['array', {}],
                'token': $,
            })
        },
        'object': ($) => {
            return $i.unexpected.object({
                'expected': ['array', {}],
                'token': $,
            })
        },
        'simpleString': ($) => {
            $i.unexpected['simple string']({
                'expected': ['array', {}],
                'token': $,
            })
        },
        'taggedUnion': ($) => {
            return $i.unexpected['tagged union']({
                'expected': ['array', {}],
                'token': $,
            })
        },
    }
}