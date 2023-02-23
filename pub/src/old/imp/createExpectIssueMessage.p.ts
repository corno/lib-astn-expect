// import * as pl from 'pareto-core-lib'

// import * as mapi from "../interface"

// import { printExpectedValue, printExpectedValueType } from "./printExpectedValue.p"

// export const createExpectIssueMessage: api.CreateExpectIssueMessage = ($, $d) => {
//     const $0 = $
//     switch ($0.issue[0]) {
//         case 'array is not a list': {
//             return `expected a list: [ ]`
//         }
//         case 'array is not a shorthand group': {
//             return `expected a shorthand group: < >`
//         }
//         case 'object is not a dictionary': {
//             return `expected a dictionary: { }`
//         }
//         case 'object is not a verbose group': {
//             return `expected a verbose group: ( )`
//         }
//         case 'invalid value type': {
//             const $ = $0.issue[1]
//             return `expected ${printExpectedValue($.expected)} but found ${printExpectedValueType($.found)}`
//         }
//         case 'invalid string': {
//             const $ = $0.issue[1]
//             return `expected '${printExpectedValue($.expected)}' but found '${$.found}'`
//         }
//         case 'duplicate property': {
//             const $ = $0.issue[1]
//             return `duplicate property: '${$.name}'`
//         }
//         case 'missing property': {
//             const $ = $0.issue[1]
//             return `missing property: '${$.name}'`
//         }
//         case 'unexpected property': {
//             const $ = $0.issue[1]

//             return `unexpected property: '${$["found key"]}'. Choose from ${$d.getKeysAsString($["valid keys"])}`
//         }
//         case 'duplicate entry': {
//             const $ = $0.issue[1]
//             return `duplicate entry: '${$.key}'`
//         }
//         case 'expected token': {
//             const $ = $0.issue[1]
//             const val = ((): string => {
//                 switch ($.token[0]) {
//                     case 'open angle bracket': {
//                         return '<'
//                     }
//                     case 'open bracket': {
//                         return '['
//                     }
//                     case 'close bracket': {
//                         return ']'
//                     }
//                     case 'close angle bracket': {
//                         return '>'
//                     }
//                     case 'open curly': {
//                         return '{'
//                     }
//                     case 'close curly': {
//                         return '}'
//                     }
//                     case 'open paren': {
//                         return '('
//                     }
//                     case 'close paren': {
//                         return ')'
//                     }
//                     default:
//                         return pl.au($.token[0])
//                 }
//             })()
//             return `expected '${val}' but found '${$.found}'`
//         }
//         case 'not a valid number': {
//             const $ = $0.issue[1]
//             return `'${$.value}' is not a valid number`
//         }
//         case 'string is not quoted': {
//             // const $ = issue[1]
//             return `not a quoted string`
//         }
//         case 'string should not have quotes or apostrophes': {
//             // const $ = issue[1]
//             return `a string with quotes or apostrophes`
//         }
//         case 'superfluous element': {
//             //const $ = issue[1]
//             return `superfluous element`
//         }
//         case 'elements missing': {
//             const $ = $0.issue[1]
//             return `${$d.getNumberOfKeysAsString($.names)} missing element(s): ${$d.getKeysAsString($.names)}`
//         }
//         case 'unknown option': {
//             const $ = $0.issue[1]
//             return `unknown option '${$.found}', choose from ${$d.getKeysAsString($["valid options"])} `
//         }
//         default:
//             return pl.au($0.issue[0])
//     }
// }
