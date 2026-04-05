export const globalStyle = `
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; scroll-behavior: smooth; }
  body { font-family: 'Lato', sans-serif; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; }
  h1, h2, h3 { font-family: 'Playfair Display', serif; }
`;

export const lightVars = `
  :root {
    --bg:           #f5f0e8;
    --text:         #2c2416;
    --muted:        #7a6e5f;
    --panel:        rgba(255,252,245,0.80);
    --accent1:      #5a7a5a;
    --accent2:      #8aab6e;
    --accent-light: #d6e8c8;
    --border:       rgba(90,122,90,0.15);
    --shadow:       0 4px 18px rgba(44,36,22,0.08);
  }
  body { background: #f5f0e8; color: #2c2416; }
`;

export const darkVars = `
  :root {
    --bg:           #120a18;
    --text:         #eeeade;
    --muted:        #9aaa8a;
    --panel:        rgba(20,10,24,0.75);
    --accent1:      #a8c890;
    --accent2:      #c8b870;
    --accent-light: rgba(168,200,144,0.15);
    --border:       rgba(168,200,144,0.12);
    --shadow:       0 4px 24px rgba(0,0,0,0.45);
  }
  body { background: #120a18; color: #eeeade; }
`;
