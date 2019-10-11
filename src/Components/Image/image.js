import React, { Component }from "react";

import './image.scss';

import testImage from '../../Img/image.jpg';

const blockName = "image";

export default class Image extends Component {
    constructor (props) {
        super(props);

        const { imageShadow } = props;
        this.statusShadow = imageShadow;
    }

    render() {
        return (
            <>
                <p className="test">test image</p>
                {this.statusShadow === "big" ? <img src={testImage} alt='test image' className={`${blockName}--box-shadow-big`} />
                : this.statusShadow === "small" ? <img src={testImage} alt='test image' className={`${blockName}--box-shadow-small`} />
                : <img src={testImage} alt='test image' className={`${blockName}--box-shadow-medium`} />}
                
            </>
        )
    }
}