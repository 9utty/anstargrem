# 잘 만들어진 컴포넌트란?

- 컴포넌트를 만드는 이유, 재사용성
- 컴포넌트화 하지 않고 만들다 보면 너무 많은 코드 양으로 유지보수 난이도 증가
- 너무 잦은 컴포넌트화는 예상하지 못한 변경점이 생겨 버그로 이어짐

<hr/>
<br>

## 1. 의도하지 않은 변경점을 최소화하기 위해서는?

- 컴포넌트를 제일 작은 단위부터 만들어가자로 접근할 수 있다
  - Atomic design pattern이라고 한다
    - 작은단위부터 큰 단위까지의 컴포넌트를 조합해 만들어가는 것
      - Lego조립하는것과 같은 개념이다

<hr/>
<br>

## 2. Dumb component vs Smart component

- Dumb component(멍청한 컴포넌트)
  - 보여주는 일에만 집중
- Smart component(똑똑한 컴포넌트)
  - 상태를 가지고 스스로 변함

<hr />
<br>

## 3. 컴포넌트를 만드는 타이밍

- 언제 컴포넌트를 만들어 재사용 하는가?
  - 제일 작은 단위는 우선적으로 컴포넌트로 만들어 재사용
  - Molecule이상의 단계들 중에서 3회 이상 반복되면 컴포넌트로 만든다

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<hr />

# React Hook에 대해서

## 1. What is Hook?

- hook이란?

  - react 16.8 버전에서 새로 추가된 기능이다
  - functional component에서도 state와 기타 다른 사이드 이펙트를 다루기 위해 탄생되었다

- functional component?

  - hook 탄생 이전에는 state를 가질 수가 없었기 때문에 주로 dumb component로만 활용
  - hook의 등장으로 주목받기 시작했다

- 왜 hook을 만들었는가?

  - 첫 번째, 컴포넌트간 상태 관련 로직 재사용하기 어려웠다
    - 매번 같은 상태 관리 로직을 Copy & Paste 공통화 되지 않다보니 컴포넌트 마다 변경사항을 수정해야 하는 어려움
  - 두 번째, 컴포넌트가 커질수록 복잡해지는 로직이 문제가 있다
    - componentDidMount에서 너무 많은 일을 하게 됨
    - Ex) 컴포넌트 마운트시 api 호출 및 event listener를 subscribe 단일 책임 원칙(SRP)에서 벗어나게 되는 일이 생길 수 있다
  - 세 번째, 혼란을 주는 class

    - 클래스는 혼동되기 쉽다
    - class this 키워드에서 오는 좋지 못한 경험

    ```javascript
    export class ComponentA extends React.Component {
      ㅇ;
      alertUserNAme() {
        alert("hi" + this.props.userName); // 호출 당시의 기대했던 this.props.userName과 실행 당시의 값이 다르게 됨
      }

      OnPressButton() {
        setTimeout(() => {
          alertUserName();
        }, 3000);
      }
    }
    ```

- hook 사용의 규칙(1)

  - 모든 hook을 사용할때 최상단에서 호출 하여야만 함

- <u>hook 사용의 규칙(2)</u>
  - React 함수에서만 hook을 사용 해야 함
  <br>
  <br>
  <hr/>
  <br>

## 2.실무에서 자주 사용하는 library hook

- react-native

  - useWindowDimensions

  ```javascript
  export const ComponentA = (props) => {
    const (window, height) = useWindowDimensions();
    {...etc code}
  }
  ```

  - useBackHandler
    - 안드로이드환경에서 하드웨어 back키를 눌렀을때 사용하는 hook이다
    - bool값을 무조건 리턴해줘야한다
    - true를 반환한다는 것은 이벤트를 핸들링하고, 다음 컴포넌트로 안넘어간다는 것이다
    - false 일 땐, 현재 컴포넌트에서 처리하지 않고, 다른 컴퍼넌트에게 제어권을 넘긴다는 말이다
    - 주로 모달을 닫을 때 사용한다

  ```bash
  $ npm install @react-native-community/hooks
  ```

  ```javascript
  export const ComponentA = (props) => {
    useBackHandler(() => {
      return true;
    });
    {..etc code}
  };
  ```

  - useAppState
    - 현재 app의 상태가 어떤지 알기 위해서 사용한다
    - 포어그라운드에 있는지, 백그라운드에 있는지 알기 위해서 사용한다

  ```bash
  $ npm install @react-native-community/hooks
  ```

  ```javascript
  export const ComponentA = (props) => {
    const currentAppState = useAppState(); //active, background, inactive(only ios)
    {...etc code}
  }
  ```

- react-navigation

  - useNavigation, useRoute

  ```javascript
  export const ComponentA = (props) => {
    const navigation = useNavigation();
    const routes = useRoute();
    {..etc code}
  }
  ```

  - useIsFocused, useFocusEffect

  ```javascript
  export const ComponentA = (props) => {
    const isFocused = useIsFocused();
    useFocusEffect(useCallback(() => {
      // focus 가 되었을때 처리
    }, [userId]))
    {...etc code}
  };
  ```

  - useScrollToTop
    - ScrollView를 최상단으로 올릴때 사용

  ```javascript
  export const ComponentA = (props) => {
    const scrollViewRef = useRef();
    useScrollToTop(scrollViewRef);
    {...etc code}
  }
  ```
