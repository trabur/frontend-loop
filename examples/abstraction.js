import fl from '../bundle.js'
import { not, nand } from './not.js'
import { print } from './data.js'

export let abstraction = fl.graph('abstraction')
abstraction.type('boolean', true).port('a').agent('nand', nand)
abstraction.type('boolean', true).port('b').agent('nand').port('output')
  .port('input').subgraph('not', not).port('output')
  .port('input').agent('print', print)
// --or--
// '${imsgTrue}' -> a nand(${maths_boolean_nand})
// '${imsgTrue}' -> b nand()
// nand() output -> input not(${maths_boolean_not})
// not() output -> input print(${maths_boolean_print})