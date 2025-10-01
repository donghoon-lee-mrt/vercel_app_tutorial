import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>مرحباً، أهلاً وسهلاً!</h1>
        <p>
          هذا تطبيق React.js بسيط. (نسخة معدلة)
          <br />
          تم بناؤه على Node.js وتم تجميعه باستخدام Webpack.
        </p>
        <div className="welcome-message">
          <p>أهلاً وسهلاً! تم بناء هذه الصفحة باستخدام مكونات React.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
