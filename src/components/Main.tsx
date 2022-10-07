import Image from 'next/image';
import React from 'react';

import CNNWiPImage from '../images/WiP/2020_Hanson_WIP.png';

interface propTypes {
  isArticleVisible: boolean,
  article: string,
  articleTimeout: boolean,
  onCloseArticle: () => void,
  timeout: boolean
}

class Main extends React.Component<propTypes> {
  render() {

    const close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} id="intro" style={{display:'none'}}>
          <h2 className="major">Deep Neural Nets</h2>
          <span className="image main">
            <Image alt="Walking in Place" layout="responsive" placeholder="blur" src={CNNWiPImage} />
          </span>
          <p></p>
          <p>
            Walking in place is a standard method for moving through large
            virtual environments when physical space or positional tracking is
            limited. This technique has become increasingly prominent with
            the advent of mobile virtual reality in which external tracking may
            not be present. In this paper, we revisit walking in place algorithms
            to address some of their technical challenges. Namely, our solutions attend to improving starting, stopping, and speed control for
            individual users. From a hand-tuned threshold based algorithm, we
            provide a new, fast method for individualizing the walking in place
            algorithm based on biomechanic measures of step rate. In addition,
            we introduce a new walking in place model based on a convolutional neural network trained to differentiate walking and standing.
            Over two experiments we assess these methods against a traditional
            threshold based algorithm on two mobile virtual reality platforms.
            The assessments are based on controllability, scale, and presence.
            Our results suggest that an adequately trained convolutional neural
            network can be an effective way of implementing walking in place.
          </p>
          <iframe 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            frameBorder="0" 
            height="315" 
            src="https://www.youtube.com/embed/bw6SA0oxKC4" 
            title="YouTube video player" 
            width="560" 
          ></iframe>
          <p>
            <b><a href='https://haleyscommit.dev/docs/2019_Hanson_IEEEVR_Walking_In_Place.pdf'>
              Improving Walking in Place Methods with Individualization and Deep Networks
            </a></b>
            <br></br>
            <i>Sara Hanson, <b>Richard A. Paris</b>, Haley Adams, and Bobby Bodenheimer</i>
            <br></br>
            IEEE Virtual Reality 2019
          </p>
          {close}
        </article>

        <article className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} id="work" style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img alt="" src="/images/pic02.jpg" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} id="about" style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img alt="" src="/images/pic03.jpg" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

      </div>
    )
  }
}

export default Main