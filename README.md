FARMERLESS
========
the paradigm shift here is that we are coding the flow of data rather than the flow of control or logic. this level of abstraction and thinking requires that we make decisions about what Nodes and Edges are needed as dependancies. because of that each one of these graphs consists of an implementation and an interface. our interface is a simple library coded in JavaScript which describes the what and how of data flow through Agents and Subgraphs. we leave the final implementation up to the programmer.

Build:
```bash
$ npm i -g rollup
$ npm run bundle
```

Browser:
```bash
$ http-server . -p 3000
# http://localhost:3000/ht.beep.html
```