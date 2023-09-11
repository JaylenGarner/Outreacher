import "../../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { oswald } from "./fonts";

import Provider from "../../components/Provider";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
  title: "Outreacher",
  description: "Streamline your networking agenda",
  openGraph: {
    images: ["/logo-small.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${oswald.className} max-h-screen max-w-screen violet_gradient`}
        >
          <ReduxProvider>{children}</ReduxProvider>
          <Analytics />
        </body>
      </Provider>
    </html>
  );
}
