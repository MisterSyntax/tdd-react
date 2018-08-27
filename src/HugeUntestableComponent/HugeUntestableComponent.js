import PropTypes from 'prop-types';
import React from 'react';
import './HugeUntestableComponent.css';
import wiggle from '../images/wiggle.gif'

class HugeUntestableComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            fullScreenImage: false
        };
    }
    render() {
        return (
            <div className="huge-untestested-component">
                {
                    this.props.isLoadingImage ?
                        (<div className={this.props.isMobile ? 'mobile-image-loading' : 'image-loading'}>
                            Loading Image...
                        </div>)
                        :
                        (<div
                            className={`${this.props.isMobile ? 'mobile-image-container' : 'image-container'} ${this.state.fullScreenImage ? 'full-screen-image-container' : ''}`}
                            onClick={() => this.setState(prevState => ({
                                fullScreenImage: !prevState.fullScreenImage}))
                            }
                        >
                            <img src={wiggle} className={this.state.fullScreenImage ? 'full-screen-image' : ''} />
                        </div>)
                }
                {
                    this.props.isLoadingQuote ?
                        (
                            <div className="loading-quote">
                                Loading...
                            </div>
                        )
                        :
                        (
                            <div className="quote-author-container">
                                <div
                                    className={`quote ${this.state.expandedQuote ? 'expanded' : 'collapsed'}`}
                                >
                                    I am a quote and I am the greatest quote! I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!I am a quote and I am the greatest quote!
                                </div>
                                {!this.props.isMobile && (
                                    <div className="author">
                                        Abroham Sausage McGriddle
                                    </div>)
                                }
                            </div>
                        )
                }
            </div>
        );
    }
}

HugeUntestableComponent.propTypes = {
    expandedQuote: PropTypes.bool,
    isLoadingQuote: PropTypes.bool,
    isLoadingImage: PropTypes.bool,
    isMobile: PropTypes.bool,
};

HugeUntestableComponent.defaultProps = {
    isMobile: false,
};

export default HugeUntestableComponent;
