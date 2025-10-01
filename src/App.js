import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>안녕하세요, 반갑습니다!</h1>
        <p>
          이것은 간단한 React.js 애플리케이션입니다.
          <br />
          Node.js 기반으로 구성되었으며, 웹팩을 사용하여 번들링됩니다.
        </p>
        <div className="welcome-message">
          <p>환영합니다! 이 페이지는 React 컴포넌트로 구성되어 있습니다.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
