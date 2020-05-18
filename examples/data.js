import fl from '../bundle.js'
import { nand } from './not.js'

export function print(flow) {
  flow.in('input', (data) => {
    console.log(data)
  })
}
export let data = fl.graph('data')
data.type('boolean', true).port('a').agent('nand', nand)
data.type('boolean', true).port('b').agent('nand').port('output')
  .port('input').agent('print', print)
// --or--
// nand(${maths_boolean_nand})
// '${imsgTrue}' -> a nand()
// '${imsgTrue}' -> b nand()
// nand() output -> input io_print(${maths_boolean_print})