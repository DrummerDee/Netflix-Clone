import { Outlet, LiveReload, Links, Link } from "@remix-run/react";
import globalStyles from '~/styles/global.css'
//imports any stylesheet 
export const links = () => [{rel:'stylesheet',href: globalStyles }]

//This will hold all out of html meta info
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet/>
      </Layout>
    </Document>
  );
}



interface Props {
  title?: string,
  children: JSX.Element | JSX.Element[],
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
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};
// header and footer are components that wrap on most pages 
// create separate components with transparent colors 
// remember to watch the routing portion of the video

const Layout = ({children }: Props) => {
  return (
    <>
    <Link to='/'><img src ='#' alt='Netflix' /></Link>
    <Link to='/signIn'> Sign In </Link>
    <div>{children}</div>
    </>
  )
}
const footerLayout = ({children}: Props) => {
  return (
    <>
    <h3> Questions? Call 1-800-NETFLIX </h3>
    </>
  )
}