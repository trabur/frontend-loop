import fl from '../bundle.js'

export function adder(flow) {
  flow.ints('add', (a, b, c, d) => {
    let value = a + b + c + d
    flow.out('output', value)
  })
}
export let operate = fl.graph('operate')
operate.in('add0').ports('add', '0').agent('adder', adder)
operate.in('add1').ports('add', '1').agent('adder')
operate.in('add2').ports('add', '2').agent('adder')
operate.in('add3').ports('add', '3').agent('adder').port('output').out('output')
// --or--
// add0 => add[0] adder(${path_to_adder})
// add1 => add[1] adder()
// add2 => add[2] adder()
// add3 => add[3] adder() output => output