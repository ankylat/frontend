import "../styles/globals.css";
import { useEffect, useState } from "react";
import { Montserrat_Alternates } from "next/font/google";
import axios from "axios";
import Head from "next/head";



const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});


function MyApp({ Component, pageProps }) {

  const [isTextareaClicked, setIsTextareaClicked] = useState(false);

  const [show, setShow] = useState(false);
 

  return (
    <main
      className={`${
        montserratAlternates.className
      } h-screen flex flex-col background-transition ${
        isTextareaClicked ? "withoutBg" : "bodyBg"
      }`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <Head>
        <title>anky</title>
        <meta
          name="description"
          content="The antidsote to writers block: just write."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content="Anky" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Anky" />
        <meta name="description" content="Tell us who you are" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#21152C" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/images/touch/homescreen48.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/touch/homescreen168.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/touch/homescreen192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/touch/homescreen168.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/touch/homescreen48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/touch/homescreen48.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Righteous:300,400,500"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://anky.lat" />
        <meta name="twitter:title" content="Anky" />
        <meta name="twitter:description" content="Tell us who you are" />
        <meta
          name="twitter:image"
          content="https://anky.lat/images/touch/homescreen168.png"
        />
        <meta name="twitter:creator" content="@kithkui" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anky" />
        <meta property="og:description" content="Tell us who you are" />
        <meta property="og:site_name" content="Anky" />
        <meta property="og:url" content="https://anky.lat" />
        <meta
          property="og:image"
          content="https://anky.lat/images/touch/homescreen144.png"
        />
        <script src="/main.js" defer></script>
      </Head>
        <Component
                      {...pageProps}
                      isTextareaClicked={isTextareaClicked}
                      setIsTextareaClicked={setIsTextareaClicked}
                      show={show}
                    />
    </main>
  );
}

export default MyApp;
