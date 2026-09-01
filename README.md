# TypeScript 학습 정리

**TypeScript를 공부하며 만든 연습 프로젝트 모음입니다.**

| 폴더 | 주제 |
| :--- | :--- |
| [`ts-practice`](./ts-practice) | 기본 문법 — 타입 선언, 인터페이스, 제네릭 |
| [`ts-react-tutorial`](./ts-react-tutorial) | 리액트에 타입 붙이기 — props와 이벤트 핸들러 타이핑 |
| [`ts-react-redux-tutorial`](./ts-react-redux-tutorial) | Redux까지 타입으로 묶기 — 액션과 리듀서의 타입 추론 |

**순서에 의도가 있습니다.** 문법만 따로 보면 잘 안 붙어서, 리액트 → Redux로 가며 타입이 실제로 무엇을 막아주는지 확인하는 쪽으로 진행했습니다. 특히 Redux 단계에서 액션 타입을 유니온으로 좁히면 리듀서의 `switch`가 자동으로 걸러진다는 게 가장 크게 남았습니다.

각 폴더에서 `yarn install && yarn start`로 실행합니다.

---

> 학습용 저장소입니다.
