import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* TẠO DỰ ÁN REACT - TYPESCRIPT
B1: Tạo thư mục dự án -> Bật VScode thư mục dự án

B2: Cài Vite: npm create vite@latest
Ok to proceed? (y) y
✔ Project name: … ./ | ./ nếu muốn thư mục REACTJS_TYPESCRIPT là thư mục chính | Tab + đặt thên nếu muốn tạo thư mục con
✔ Package name: … reactjs-typescript
✔ Select a framework: › React 
✔ Select a variant: › TypeScript
Cài file node_modules: npm i | npm install
Khởi động localhost: npm run dev

B3: Tái cấu trúc thư mục src
- Xoá App.css
- Edit App.tsx: xoá nội dung TRONG <></> ,  hook useState và các lệnh import
- Edit main.tsx: xoá Component <StrictMode></StrictMode> để lại Component <App/>
- Edit index.html: rename title

B4: Cài đặt thư viện
1) AXIOS: npm i axios
2) TAILWIND: https://tailwindcss.com/docs/guides/vite => làm theo hướng dấn
3) REDUX-TOOLKIT (Dành cho TS): https://redux-toolkit.js.org/introduction/getting-started => TypeScript Quick Start
Terminal: npm install @reduxjs/toolkit react-redux  
Trong thư mục src -> Tạo thư mục redux:
  - Tạo file store.ts -> Copy & Paste code trong "Define Root State and Dispatch Types"
  - Tạo file hooks.ts -> Copy & Paste code trong "Define Typed Hooks"

*/
