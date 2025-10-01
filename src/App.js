import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>안녕하세요, 환영합니다!</h1>
        <p>
          이것은 간단한 React.js 애플리케이션입니다. (수정된 버전)
          <br />
          Node.js로 구축되었으며 Webpack을 사용하여 번들링되었습니다.
        </p>
        <div className="welcome-message">
          <p>환영합니다! 이 페이지는 React 컴포넌트로 구축되었습니다.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
