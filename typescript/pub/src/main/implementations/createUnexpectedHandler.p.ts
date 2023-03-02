
import * as gh from "glo-astn-handlers"

import { CcreateUnexpectedHandler } from "../definition/api.generated"

export const $$:CcreateUnexpectedHandler = ($, $i) => {

    function createDummyObjectHandler<PAnnotation>(): gh.IObjectHandler<PAnnotation> {
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
    function createDummyArrayHandler<PAnnotation>(): gh.IArrayHandler<PAnnotation> {
        return {
            element: () => {
                return createDummyValueHandler()
            },
            onEnd: () => { }
        }
    }
    function createDummyTaggedUnionHandler<PAnnotation>(): gh.ITaggedUnionHandler<PAnnotation> {
        return {
            option: () => createDummyRequiredValueHandler(),
            missingOption: () => createDummyRequiredValueHandler(),
            onEnd: () => { }
        }
    }
    function createDummyValueHandler<PAnnotation>(): gh.IValueHandler<PAnnotation> {

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

    function createDummyRequiredValueHandler<PAnnotation>(): gh.IRequiredValueHandler<PAnnotation> {
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