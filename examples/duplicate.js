import fl from '../bundle.js'

export function clone(flow) {
  flow.import('input', (a) => {
    flow.exports('clone', a, a, a, a)
  })
}
export let duplicate = fl.graph('duplicate')
duplicate.in('db_path').port('input').agent('clone', clone)
duplicate.agent('clone').ports('clone', '0').out('db_path0')
duplicate.agent('clone').ports('clone', '1').out('db_path1')
duplicate.agent('clone').ports('clone', '2').out('db_path2')
duplicate.agent('clone').ports('clone', '3').out('db_path3')
// --or--
// db_path => input clone(${msg_clone})
// clone() clone[0] => db_path0
// clone() clone[1] => db_path1
// clone() clone[2] => db_path2
// clone() clone[3] => db_path3