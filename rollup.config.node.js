import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import amd from 'rollup-plugin-amd';
import resolve from '@rollup/plugin-node-resolve';

const node = {
	input: 'index.js',
  external: [
    'liferaft',
    'phoenix-channels'
  ],
	output: [
		{
			file: 'node.js',
      format: 'umd',
      // globals: [ 'phoenix-channels', 'liferaft' ]
      globals: {
        // 'liferaft': 'Raft',
        // 'phoenix-channels': 'Socket'
      },
		}
	],
	plugins: [
    json(),
    builtins(),
    amd(),
    babel({
      // exclude: 'node_modules/**'
    }),
    resolve()
  ],
};

export default node;
