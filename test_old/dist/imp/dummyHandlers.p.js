"use strict";
// import * as h from "astn-handlers-api"
// export function createDummyValueHandler<TokenAnnotation>(): h.IValueHandler<TokenAnnotation> {
//     function createDummyObjectHandler(): h.IObjectHandler<TokenAnnotation> {
//         return {
//             property: () => {
//                 return createDummyRequiredValueHandler()
//             },
//             anonymousProperty: () => {
//                 return createDummyValueHandler()
//             },
//             onEnd: () => { },
//         }
//     }
//     function createDummyArrayHandler(): h.IArrayHandler<TokenAnnotation> {
//         return {
//             element: () => {
//                 return createDummyValueHandler()
//             },
//             onEnd: () => { }
//         }
//     }
//     function createDummyTaggedUnionHandler(): h.ITaggedUnionHandler<TokenAnnotation> {
//         return {
//             option: () => createDummyRequiredValueHandler(),
//             missingOption: () => createDummyRequiredValueHandler(),
//             end: () => { }
//         }
//     }
//     return {
//         object: () => {
//             return createDummyObjectHandler()
//         },
//         array: () => {
//             return createDummyArrayHandler()
//         },
//         taggedUnion: () => {
//             return createDummyTaggedUnionHandler()
//         },
//         simpleString: () => {
//         },
//         multilineString: () => {
//         }
//     }
// }
// export function createDummyRequiredValueHandler<TokenAnnotation>(): h.IRequiredValueHandler<TokenAnnotation> {
//     return {
//         missing: () => {
//         },
//         exists: createDummyValueHandler()
//     }
// }
