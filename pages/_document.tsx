import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import { Fragment } from "react"
import React from "react"

import { CssBaseline } from "@geist-ui/core"
import { createStitches } from "@stitches/react"

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    const styles = CssBaseline.flush()
    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
          {styles}
        </Fragment>,
      ],
    }
  }

  render() {
    return (
      <Html itemType="https://schema.org/ProfessionalService" lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export const { getCssText } = createStitches()
export default Document
