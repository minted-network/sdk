import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      copy({
        targets: [
          { src: 'src/abis/**/*.json', dest: 'dist/abis' },
          { src: 'src/abis.private/**/*.json', dest: 'dist/abis' },
        ],
      }),
      json(),
      typescript({
        exclude: ['**/*.test.ts', '**/*.spec.ts', '**/*.old.ts'],
      }),
    ],
    external: ['ethers'],
  },
];
