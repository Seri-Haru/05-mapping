import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // スタイルシートをインポート

const root = ReactDOM.createRoot(document.getElementById('content')); // HTMLのcontent IDを持つ要素を取得
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
