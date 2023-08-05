/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  // 브라우저 설정을 따라감
  darkMode: "media",
  // dark: 선택자를 사용하는 요소의 부모요소에
  // class="dark"를 추가해주어야 다크모드를 따라가게 됨
  // 그래서 보통은 html의 body태그(가장 상위 요소)에 dark 클래스네임을 추가한다
  // darkMode: "class",
  plugins: [
    require("@tailwindcss/forms")
  ], plugins: [],
}