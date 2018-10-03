import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './Humanlapse.css';
import RedirectButton from './../../components/RedirectButton/RedirectButton';

import {humanlapseGallery} from './../../content/content'


export default class Humanlapse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: undefined,
            galleryIndex: 0
        }
    }

    componentWillMount() {
        const key = this.props.match.params.key;
        if (humanlapseGallery[key] === undefined) {
            // TODO: redirect to 404
        }
        this.setState(() => ({gallery: humanlapseGallery[key]}))
    }

    previousContent() {
        this.setState((previousState) => ({galleryIndex: Math.max(previousState.galleryIndex - 1, 0)}))
    }

    nextContent() {
        this.setState((previousState) => ({galleryIndex: Math.min(previousState.galleryIndex + 1, previousState.gallery.content.length - 1)}))
    }

    navigationButtons() {

        if (1 < this.state.gallery.content.length) {
            return (
                <div className='navigationButtons'>
                    <div className={'previousButton'} onClick={() => {
                        this.previousContent()
                    }}/>
                    <div
                        className={'middleText'}> {this.state.galleryIndex + 1} / {this.state.gallery.content.length}</div>
                    <div className={'nextButton'} onClick={() => {
                        this.nextContent()
                    }}/>
                </div>
            )
        } else {
            return (<></>)
        }
    }

    render() {
        const contentObject = this.state.gallery.content[this.state.galleryIndex];
        const galleryTitle = this.state.gallery.name;
        const galleryDescription = this.state.gallery.description;
        const contentData = contentObject.data;
        const contentCredit = contentObject.credits;

        return (
            <div className="Humanlapse">
                <div className="pageLayout">
                    <div className="pageLayoutDescription">
                        <div className="description">
                            <p>{galleryDescription}</p>
                            {this.navigationButtons()}
                        </div>
                    </div>

                    <div className="pageLayoutHeader header">
                        <RedirectButton to={'/index'} name={''} className="exitButton"/>
                        <h1>{galleryTitle}</h1>
                    </div>

                    <div className="pageLayoutVisuals" id='pageLayoutVisuals'>
                        <div className="pageLayoutManualLayoutVideoPlayer">
                            <ReactPlayer className="Globals-noselect" url={contentData} loop={true} width={'100%'}
                                         height={'100%'} playing/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
