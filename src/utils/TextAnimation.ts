"use client"; // 確保這行在檔案的最上方

import { useEffect, useRef } from 'react';

const useTextAnimation = (titleText: string) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const randomText = (amount: number) => {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~"; // 符號字符集
    let text = '';
    for (let i = 0; i < amount; i++) {
      text += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return text;
  };

  const animateTitle = () => {
    if (!titleRef.current) return;

    const animationInterval = 7000; // 調整為每次重置動畫的時間（毫秒），例如改為 3000
    const characterDelay = 200; // 調整為每個字符顯示的延遲時間（毫秒），例如改為 200
    const randomDelay = 50; // 調整為隨機字符的顯示延遲時間（毫秒），可保持 50

    setInterval(() => {
      for (let j = 0; j <= titleText.length; j++) {
        window.setTimeout(() => {
          const current = j;
          for (let k = 0; k <= 5; k++) {
            window.setTimeout(() => {
              const correct = titleText.slice(0, current) + randomText(titleText.length - current);
              // 在這裡檢查 titleRef.current 是否為 null
              if (titleRef.current) {
                titleRef.current.innerText = correct;
              }
            }, randomDelay * k);
          }
        }, characterDelay * j);
      }
    }, animationInterval);
  };

  useEffect(() => {
    animateTitle();
  }, []);

  return titleRef;
};

export default useTextAnimation;
