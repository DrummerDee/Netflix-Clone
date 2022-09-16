import { Outlet, LiveReload, Links } from "@remix-run/react";
import globalStyles from '~/styles/global.css'
//imports any stylesheet 
export const links = () => [{rel:'stylesheet',href:'globalStyles'}]

//This will hold all out of html meta info
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}



type Props = {
  title?: string,
  children: JSX.Element,
}
const Document = ({ children, title }: Props) => {
  return (
    <html lang="en">
      <head>
        <Links />
        <title>{title ? title : 'Netflix - Watch TV Shows Online' }</title>
      </head>
      <body>
        {children}
        <h1> Jellybeans1</h1>
        <button className='click'> Hello </button>
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};
// no need for consistent component that renders on every page 