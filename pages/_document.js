import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="../lib/icons/codex.png" />
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
