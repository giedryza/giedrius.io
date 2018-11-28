import React from 'react';
import { ReactComponent as Avatar } from '../../assets/svg/avatar.svg';
import { ReactComponent as Chrome } from '../../assets/svg/chrome.svg';
import { ReactComponent as Code } from '../../assets/svg/code.svg';
import { ReactComponent as CSS3 } from '../../assets/svg/css3.svg';
import { ReactComponent as Empty } from '../../assets/svg/empty.svg';
import { ReactComponent as Express } from '../../assets/svg/express.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as GitHub } from '../../assets/svg/github.svg';
import { ReactComponent as Gmail } from '../../assets/svg/gmail.svg';
import { ReactComponent as Handlebars } from '../../assets/svg/handlebars.svg';
import { ReactComponent as HTML5 } from '../../assets/svg/html5.svg';
import { ReactComponent as JavaScript } from '../../assets/svg/javascript.svg';
import { ReactComponent as Messenger } from '../../assets/svg/messenger.svg';
import { ReactComponent as Mobile } from '../../assets/svg/mobile.svg';
import { ReactComponent as MongoDB } from '../../assets/svg/mongodb.svg';
import { ReactComponent as NodeJS } from '../../assets/svg/node.svg';
import { ReactComponent as Photoshop } from '../../assets/svg/photoshop.svg';
import { ReactComponent as ReactJS } from '../../assets/svg/react.svg';
import { ReactComponent as Redux } from '../../assets/svg/redux.svg';
import { ReactComponent as Sass } from '../../assets/svg/sass.svg';
import { ReactComponent as Balloon } from '../../assets/svg/speech-balloon.svg';
import { ReactComponent as Upload } from '../../assets/svg/upload.svg';
import { ReactComponent as Vilnius } from '../../assets/svg/vilnius.svg';
import { ReactComponent as VSCode } from '../../assets/svg/vscode.svg';
import { ReactComponent as Web } from '../../assets/svg/web.svg';
import { ReactComponent as Windows } from '../../assets/svg/windows.svg';
import { ReactComponent as YouTube } from '../../assets/svg/youtube.svg';

const Icon = ({ name, className }) => {
    switch (name) {
        case 'Avatar':
            return <Avatar className={className} />;
        case 'Chrome':
            return <Chrome className={className} />;
        case 'Code':
            return <Code className={className} />;
        case 'CSS3':
            return <CSS3 className={className} />;
        case 'Express':
            return <Express className={className} />;
        case 'Facebook':
            return <Facebook className={className} />;
        case 'GitHub':
            return <GitHub className={className} />;
        case 'Gmail':
            return <Gmail className={className} />;
        case 'Handlebars':
            return <Handlebars className={className} />;
        case 'HTML5':
            return <HTML5 className={className} />;
        case 'JavaScript':
            return <JavaScript className={className} />;
        case 'Messenger':
            return <Messenger className={className} />;
        case 'Mobile':
            return <Mobile className={className} />;
        case 'MongoDB':
            return <MongoDB className={className} />;
        case 'NodeJS':
            return <NodeJS className={className} />;
        case 'Photoshop':
            return <Photoshop className={className} />;
        case 'ReactJS':
            return <ReactJS className={className} />;
        case 'Redux':
            return <Redux className={className} />;
        case 'Sass':
            return <Sass className={className} />;
        case 'Balloon':
            return <Balloon className={className} />;
        case 'Upload':
            return <Upload className={className} />;
        case 'Vilnius':
            return <Vilnius className={className} />;
        case 'VSCode':
            return <VSCode className={className} />;
        case 'Web':
            return <Web className={className} />;
        case 'Windows':
            return <Windows className={className} />;
        case 'YouTube':
            return <YouTube className={className} />;
        default:
            return <Empty className={className} />;
    }
};

Icon.defaultProps = {
    className: 'card__icon'
};

export default Icon;
