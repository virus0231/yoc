import { Provider } from 'react-redux';
import { store } from './redux/store';
import "./css/button.css"
import "./css/globals.css"
import "./css/glass.css"
import "./css/style.scss"

export const metadata = {
  title: "BackOffice",
  description: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={``}
        >
          {children}


        {/* Glass Blur Effect */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
          <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>


        </body>
      </html>
    </Provider>
  );
}
