import {memo} from "react";

interface propTypes {
    onOpenArticle: (article: string) => void,
    timeout: boolean
}

const Header = memo((props: propTypes) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Walking in Place</h1>
                <p>
                    Moving through a virtual environment takes some method of locomotion.
                    This work uses walking in place and adapts the method of step detection to be taken from the headset.
                    This offers a low-cost (from the device) way of measuring steps.
                    Here we present a number of projects using this work, and show how deep neural nets can be used to make this recognition better
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Deep Neural Nets</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>  Collaborators  </a></li>
            </ul>
        </nav>
    </header>
));

export default Header
