CI:

1. linting

- eslint: 코드 규칙 정하기, 실수 줄이기

2. testing

- jest: 함수기 올바른 지 체크
- fast-check: 수많은 테스트 케이스로 함수 체크

3. building

### eslint

- npm init -y
- npm install eslint
- npx eslint --init: js/problems/esm/none/no/browser/y/y
- set rules(eslint.config.ts):

- pkg: commonjs

### testing

- npm install jest fast-check
- @.util.spec.js:
- test("@@@", () => { expect().toBe() });

- pkg: "scripts": {"lint": "eslint", "test": "jest"}
- npm run test
  --jest.config.js => npx create jest@latest--

CD:
