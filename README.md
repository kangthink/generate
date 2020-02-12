# generate
빠른 프로젝트 시작을 위한 템플릿 모음. [environment](https://github.com/kangthink/environment)를 참조하여 환경을 설정하고 그 위에 소스코드를 시작하면 됨.

## 사용법
1. 프로젝트 루트에서는 'yarn start` 실행
2. 프로젝트 밖에서 사용하고 싶을 때는 `yarn build`, `npm install -g` 각각을 실행

## 템플릿 추가하기
1. `src/templates` 폴더 아래에 만들고자 하는 프로젝트의 의도가 드러나도록 폴더 생성
2. 프로젝트 이름이 들어갈 자리에 `<%= projectName %>` 문자열로 대체

## TODO
- [ ] python with pants
- [ ] python lib tox
- [ ] dart ddd
- [ ] ts ddd 개선
- [ ] vue lib
