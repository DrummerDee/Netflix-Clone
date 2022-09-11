import { Outlet, LiveReload } from '@remix-run/react';
export default function App(){
  return (
    <html lang='en'>
      <head>
        <title> Netflix </title>
        </head>
        <body>
          <Outlet />
          <h1> Jellybeans1</h1>
          {process.env.NODE_ENV === 'development' ? <LiveReload/> : null}
          </body>
          </html>
  )
}