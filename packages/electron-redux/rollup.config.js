import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/index.ts',
    output: {
      file: 'dist/esm/index.js',
      format: 'es',
    },
    plugins: [
      typescript({
        tsconfigOverride: { compilerOptions: { declaration: false } },
      }),
    ],
    external: ['electron'],
  },
  {
    input: './src/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    plugins: [typescript({ useTsconfigDeclarationDir: true })],
    external: ['electron'],
  },
];
