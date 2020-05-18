import fl from '../bundle.js'
import { duplicate } from './duplicate.js'

export function nand(flow) {
  flow.imports('nand', (a, b) => {
    if (a && b) {
      flow.export('output', false)
    } else {
      flow.export('output', true)
    }
  })
}
export let not = fl.graph('not')
not.in('input').port('input').agent('clone', duplicate)
not.agent('clone').ports('clone', '0').ports('nand', 'a').agent('nand', nand)
not.agent('clone').ports('clone', '1').ports('nand', 'b').agent('nand').port('output').out('output')
// --or--
// input => input clone(${msg_clone})
// clone() clone[0] -> a nand(${maths_boolean_nand})
// clone() clone[1] -> b nand() output => output