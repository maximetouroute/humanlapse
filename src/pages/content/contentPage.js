import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './contentPage.css';
import {ContentTypes} from './../../content/content';
import {contentPages} from './../../content/content'


export default class ContentPage extends Component {

    constructor(props) {
        super(props);

        const key = this.props.match.params.key;
        // Bad url goes back to menu
        if (contentPages[key] === undefined) {
            this.goToMenu();
        }
        this.state = {
            content: contentPages[key],
            mediaGalleryIndex: 0
        }
    }

    previousContent() {
        this.setState((previousState) => ({mediaGalleryIndex: Math.max(previousState.mediaGalleryIndex - 1, 0)}))
    }

    nextContent() {
        this.setState((previousState) => ({mediaGalleryIndex: Math.min(previousState.mediaGalleryIndex + 1, previousState.content.mediaGallery.length - 1)}))
    }

    navigationButtons() {

        const beginningOfGallery = this.state.mediaGalleryIndex === 0;
        const endOfGallery = this.state.mediaGalleryIndex === this.state.content.mediaGallery.length - 1;

        const invisibleButtonStyle = {
            opacity: 0,
            userSelect: 'none'
        };

        if (1 < this.state.content.mediaGallery.length) {
            return (
                <div className='navigationButtons'>
                    <div className="svgButton previousButton"
                         style={beginningOfGallery ? invisibleButtonStyle : {}}
                         onClick={() => {
                             this.previousContent()
                         }}>
                        <div className="previous"/>
                    </div>

                    <div
                        className={'middleText'}> {this.state.mediaGalleryIndex + 1} / {this.state.content.mediaGallery.length}</div>
                    <div className="svgButton nextButton"
                         style={endOfGallery ? invisibleButtonStyle : {}}
                         onClick={() => {
                             this.nextContent()
                         }}>
                        <div className="next"/>
                    </div>
                </div>
            )
        } else {
            return (<></>)
        }
    }

    reactPlayerLayoutClass() {
        const contentData = this.state.content.mediaGallery[this.state.mediaGalleryIndex].data;

        if (contentData.indexOf('vimeo') !== -1) {
            return 'pageLayoutManualLayoutVideoPlayer manualSixteenByNineHeight'
        } else {
            return 'pageLayoutManualLayoutVideoPlayer'
        }
    }

    playerProgress(data) {
        //console.log(data.loaded);
    }


    renderVideoContent() {
        const contentObject = this.state.content.mediaGallery[this.state.mediaGalleryIndex];
        const galleryTitle = this.state.content.name;
        const galleryDescription = this.state.content.description;
        const contentData = contentObject.data;
        const contentCredits = contentObject.credits;

        return (
            <div className="contentPage">
                <div className="pageLayout">
                    <Header title={galleryTitle} history={this.props.history}/>


                    <div className="contentText">{galleryDescription}</div>

                    <div className="pageLayoutVisuals" id='pageLayoutVisuals'>
                        <div className={this.reactPlayerLayoutClass()}>
                            <ReactPlayer url={contentData} loop={true} width={'100%'} height={'100%'} controls={true}
                                         playing onProgress={this.playerProgress}/>
                        </div>

                    </div>
                    <div className="contentCredits">{contentCredits}</div>
                    <div>{this.navigationButtons()}</div>
                </div>
            </div>
        )
    }


    renderJSXContent() {
        return (
            <div className="contentPage">
                <div className="pageLayout">
                    <Header title={this.state.content.name} history={this.props.history}/>
                    <div className="contentText">{this.state.content.jsx}</div>
                </div>
            </div>
        )
    }

    render() {
        // Avoid bad renders Until gets redirected to menu
        if (this.state.content === undefined) {
            return (<></>);
        }
        if (this.state.content.contentType === ContentTypes.VIDEO) {
            return this.renderVideoContent()
        } else if (this.state.content.contentType === ContentTypes.JSX) {
            return this.renderJSXContent();
        } else {
            return (<div>Error: empty gallery</div>)
        }
    }
}


class Header extends Component {
    constructor(props) {
        super(props)
    }

    goToMenu() {
        this.props.history.push(process.env.PUBLIC_URL + '/index')
    }

    render() {
        const title = this.props.title;

        return (
            <div className="pageLayoutHeader header">

                <div className="svgButton exitButton" onClick={() => {
                    this.goToMenu()
                }}>
                    <div className="exit"/>
                </div>
                <h1>{title}</h1>
            </div>
        )
    }
}