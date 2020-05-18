import fl from '../bundle.js'

export function agent(flow) {
  flow.import('input', (name) => {
    console.log(`welcome, ${name}`)
  })
}
export let subgraph = fl.graph('subgraph')
subgraph.subgraph('subgraph', subgraph).port('output')
  .port('input').agent('agent', agent)
// --or--
// subgraph(${name_of_subgraph})
// agent(${name_of_agent})
// subgraph() output -> input agent()