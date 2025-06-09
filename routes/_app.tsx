import { type PageProps } from "$fresh/server.ts";
import PageNav from "../components/PageNav.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mytube</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <PageNav />
        <Component />
      </body>
    </html>
  );
}
