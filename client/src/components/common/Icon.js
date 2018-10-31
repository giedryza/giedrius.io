import React from 'react';
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
import { ReactComponent as Node } from '../../assets/svg/node.svg';
import { ReactComponent as Photoshop } from '../../assets/svg/photoshop.svg';
import { ReactComponent as ReactJS } from '../../assets/svg/react.svg';
import { ReactComponent as Redux } from '../../assets/svg/redux.svg';
import { ReactComponent as Sass } from '../../assets/svg/sass.svg';
import { ReactComponent as Vilnius } from '../../assets/svg/vilnius.svg';
import { ReactComponent as VSCode } from '../../assets/svg/vscode.svg';
import { ReactComponent as Windows } from '../../assets/svg/windows.svg';
import { ReactComponent as YouTube } from '../../assets/svg/youtube.svg';

const Icon = props => {
    switch (props.name) {
        case 'Chrome':
            return <Chrome {...props} />;
        case 'Code':
            return <Code {...props} />;
        case 'CSS3':
            return <CSS3 {...props} />;
        case 'Express':
            return <Express {...props} />;
        case 'Facebook':
            return <Facebook {...props} />;
        case 'GitHub':
            return <GitHub {...props} />;
        case 'Gmail':
            return <Gmail {...props} />;
        case 'Handlebars':
            return <Handlebars {...props} />;
        case 'HTML5':
            return <HTML5 {...props} />;
        case 'JavaScript':
            return <JavaScript {...props} />;
        case 'Messenger':
            return <Messenger {...props} />;
        case 'Mobile':
            return <Mobile {...props} />;
        case 'MongoDB':
            return <MongoDB {...props} />;
        case 'Node':
            return <Node {...props} />;
        case 'Photoshop':
            return <Photoshop {...props} />;
        case 'ReactJS':
            return <ReactJS {...props} />;
        case 'Redux':
            return <Redux {...props} />;
        case 'Sass':
            return <Sass {...props} />;
        case 'Vilnius':
            return <Vilnius {...props} />;
        case 'VSCode':
            return <VSCode {...props} />;
        case 'Windows':
            return <Windows {...props} />;
        case 'YouTube':
            return <YouTube {...props} />;
        default:
            return <Empty {...props} />;
    }
};

Icon.defaultProps = {
    className: 'card__icon'
};

export default Icon;
