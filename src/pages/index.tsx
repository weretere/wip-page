import Head from "next/head"
import React from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"

interface Props{
    none: string
}

interface State{
    isArticleVisible: boolean,
    timeout: boolean,
    articleTimeout: boolean,
    article: string,
    loading: string
}

class Home extends React.Component<Props, State> {
    public static defaultProps = {
        isArticleVisible: false,
        timeout: false,
        articleTimeout: false,
        article: "",
        loading: "is-loading"
    }
    timeoutId: NodeJS.Timeout | undefined;
    article = "";


    constructor(props: Props) {
        super(props)
        this.state = Home.defaultProps;
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ""})
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article: string) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>Next.js Starter</title>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i&display=optional" rel="stylesheet" />
                    </Head>

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                        <Main
                            article={this.state.article}
                            articleTimeout={this.state.articleTimeout}
                            isArticleVisible={this.state.isArticleVisible}
                            onCloseArticle={this.handleCloseArticle}
                            timeout={this.state.timeout}
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default Home
