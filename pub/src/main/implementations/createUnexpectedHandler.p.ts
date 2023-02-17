import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mh from "glo-astn-handlers"

export const $$: api.CcreateUnexpectedHandler = ($, $i) => {

    function createDummyObjectHandler<PAnnotation>(): mh.IObjectHandler<PAnnotation> {
        return {
            property: () => {
                return createDummyRequiredValueHandler()
            },
            anonymousProperty: () => {
                return createDummyValueHandler()
            },
            onEnd: () => { },
        }
    }
    function createDummyArrayHandler<PAnnotation>(): mh.IArrayHandler<PAnnotation> {
        return {
            element: () => {
                return createDummyValueHandler()
            },
            onEnd: () => { }
        }
    }
    function createDummyTaggedUnionHandler<PAnnotation>(): mh.ITaggedUnionHandler<PAnnotation> {
        return {
            option: () => createDummyRequiredValueHandler(),
            missingOption: () => createDummyRequiredValueHandler(),
            onEnd: () => { }
        }
    }
    function createDummyValueHandler<PAnnotation>(): mh.IValueHandler<PAnnotation> {

        return {
            object: () => {
                return createDummyObjectHandler()
            },
            array: () => {
                return createDummyArrayHandler()
            },
            taggedUnion: () => {
                return createDummyTaggedUnionHandler()
            },
            simpleString: () => {
            },
            multilineString: () => {
            }
        }
    }

    function createDummyRequiredValueHandler<PAnnotation>(): mh.IRequiredValueHandler<PAnnotation> {
        return {
            'missing': () => {
            },
            'exists': createDummyValueHandler()
        }
    }
    return {
        'array': ($) => {
            $i({
                'annotation': $.token.annotation,
                'expected': $.expected,
                'found': ['array', {}],
            })
            return createDummyArrayHandler()
        },
        'multiline string': ($) => {
            $i({
                'annotation': $.token.annotation,
                'expected': $.expected,
                'found': ['multiline string', {}],
            })
        },
        'object': ($) => {
            $i({
                'annotation': $.token.annotation,
                'expected': $.expected,
                'found': ['object', {}],
            })
            return createDummyObjectHandler()
        },
        'simple string': ($) => {
            $i({
                'annotation': $.token.annotation,
                'expected': $.expected,
                'found': ['simple string', {}],
            })

        },
        'tagged union': ($) => {
            $i({
                'annotation': $.token.annotation,
                'expected': $.expected,
                'found': ['tagged union', {}],
            })
            return createDummyTaggedUnionHandler()
        },
    }
}