# 잘 만들어진 컴포넌트란?

- 컴포넌트를 만드는 이유, 재사용성
- 컴포넌트화 하지 않고 만들다 보면 너무 많은 코드 양으로 유지보수 난이도 증가
- 너무 잦은 컴포넌트화는 예상하지 못한 변경점이 생겨 버그로 이어짐

<hr/>

## 1. 의도하지 않은 변경점을 최소화하기 위해서는?

- 컴포넌트를 제일 작은 단위부터 만들어가자로 접근할 수 있다
  - Atomic design pettern이라고 한다
    - 작은단위부터 큰 단위까지의 컴포넌트를 조합해 만들어가는 것
      - Lego조립하는것과 같은 개념이다

<hr/>

## 2. Dumb component vs Smart component

- Dumb component(멍청한 컴포넌트)
  - 보여주는 일에만 집중
- Smart component(똑똑한 컴포넌트)
  - 상태를 가지고 스스로 변함

<hr />

## 3. 컴포넌트를 만드는 타이밍

- 언제 컴포넌트를 만들어 재사용 하는가?
  - 제일 작은 단위는 우선적으로 컴포넌트로 만들어 재사용
  - Molcule이상의 단계뜰 중에서 3회 이상 반복되면 컴포넌트로 만든다
