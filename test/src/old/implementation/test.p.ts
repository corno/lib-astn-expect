// import * as pl from "pareto-core-lib"

// import * as h from "astn-handlers-api"
// import * as tc from "./createTestContext"

// export function doTests(
//     tc: tc.ITestContext
// ) {
//     function wrap<T>(
//         valueHandler: h.IValueHandler<T>
//     ): h.IRequiredValueHandler<T> {
//         return {
//             missing: () => {
//                 pl.logDebugMessage("!!!!!!!!!!!!!!!")
//             },
//             exists: valueHandler
//         }
//     }
//     tc.doTest(
//         {
//             data: "{ 'foo': 'bar' }",
//             expectedIssues: [],
//         },
//         {
//             handler: (ec) => wrap(
//                 ec.expectDictionary({
//                     onProperty: ($) => {
//                         pl.logDebugMessage($.token.token.value)
//                         return wrap(

//                             ec.expectSimpleString({
//                                 callback: ($) => {
//                                     pl.logDebugMessage($.token.token.value)
//                                 }
//                             })
//                         )
//                     }
//                 })
//             ),
//         }
//     )
//     tc.doTest(
//         {
//             data: "sdfasf",
//             expectedIssues: [
//                 "expected a dictionary ( {} ) but found a string (quoted, apostrophed, multiline or non wrapped (including a number, a keyword, a boolean) @ 1:1-7"
//             ],
//         },
//         {
//             handler: (ec) => wrap(
//                 ec.expectDictionary({
//                     onProperty: ($) => {
//                         //pl.logDebugMessage($.token.token.value)
//                         return wrap(

//                             ec.expectSimpleString({
//                                 callback: ($) => {
//                                     //pl.logDebugMessage($.token.token.value)
//                                 }
//                             })
//                         )
//                     }
//                 })
//             ),
//         }
//     )
// }
