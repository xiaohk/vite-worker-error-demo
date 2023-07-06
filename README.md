## Vite Error

To reproduce the error:

1. In `blue`: `npm install && npm build`
2. In `red`: `npm install && npm run dev`
3. Open localhost, the web console would show `SyntaxError: return not in function`
4. However, there is no error if one runs `npm run dev` in `blue`
