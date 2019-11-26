/** @jsx jsx */
/*
TODO:
- [ ] choose slide library or not
- [ ] make slide layout associative with header
*/

//FIXME:  this is temp component for slide

import { Fragment, useRef, forwardRef } from "react"
import { useRouter } from "next/router"
import { jsx, css, Global } from "@emotion/core"
import Head from "next/head"
import Link from "next/link"
import CustomHeader from "../components/CustomHeader"
import theme from "../components/theme"

import { Container, pageStyle, Content } from "../components/pages/index"
import Layout from "../components/Layout"

const Presentation = () => {

    const slideContent = useRef(null)


    return (
        <Layout>
            <Head>
                <title>{`Software Engineering Lab - Slide `}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <Container>
                <CustomHeader />
                <div>
                    <Page
                        ref={slideContent}
                        bgColor={theme.COLORS.sapphire}
                        color={"white"}
                    ></Page>
                </div>
            </Container>
        </Layout>
    )
}

const Page = forwardRef(({ bgColor, color, children }, ref) => (
    <div
        ref={ref}
        css={css`
            ${pageStyle};
            height: 100vh;
            background-color: ${bgColor};
            color: ${color ? color : "black"};
        `}
    >
        <Content>{children}</Content>
    </div>
))

export default Presentation
