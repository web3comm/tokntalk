import React from 'react';
import styled from 'styled-components';

import replyActive from './img/reply_active.svg';
import replyInactive from './img/reply_inactive.svg';

import likeActive from './img/like_active.svg';
import likeInactive from './img/like_inactive.svg';

export const ReplyIcon = styled.img.attrs({ src: ({ inactive }) => (!inactive ? replyActive : replyInactive) })``;
export const LikeIcon = styled.img.attrs({ src: ({ inactive }) => (!inactive ? likeActive : likeInactive) })``;

export const socialColors = {
  facebook: '#4167b2',
  twitter: '#1CA1F2',
  instagram: '#F41476',
  github: '#24292e',
};

export const socialIcons = {
  github: (props) => <GithubIcon color={socialColors.github} {...props} />,
  twitter: (props) => <TwitterIcon color={socialColors.twitter} {...props} />,
  instagram: (props) => <InstagramIcon color={socialColors.instagram} {...props} />,
  facebook: (props) => <FacebookIcon color={socialColors.facebook} {...props} />,
};

export const FacebookIcon = styled.svg.attrs({
  width: '18px',
  height: '28px',
  version: '1.1',
  viewBox: '0 0 18 28',
  children: (
    <g fill="currentColor" fillRule="nonzero">
      <path d="M5.441274,28 L5.4,15.75 L0,15.75 L0,10.5 L5.4,10.5 L5.4,7 C5.4,2.2764 8.408718,0 12.742884,0 C14.818986,0 16.603308,0.1502725 17.123292,0.2174375 L17.123292,5.1538725 L14.117328,5.1552025 C11.760174,5.1552025 11.303766,6.244175 11.303766,7.84217 L11.303766,10.5 L18,10.5 L16.2,15.75 L11.303748,15.75 L11.303748,28 L5.441274,28 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const GithubIcon = styled.svg.attrs({
  width: '25px',
  height: '24px',
  version: '1.1',
  viewBox: '0 0 25 24',
  children: (
    <g fill="currentColor" fillRule="evenodd">
      <path d="M12.2352941,0 C5.50588235,0 0,5.4 0,12 C0,17.25 3.51764706,21.75 8.41176471,23.4 C9.02352941,23.55 9.17647059,23.1 9.17647059,22.8 C9.17647059,22.5 9.17647059,21.75 9.17647059,20.7 C5.81176471,21.45 5.04705882,19.2 5.04705882,19.2 C4.43529412,17.85 3.67058824,17.4 3.67058824,17.4 C2.6,16.65 3.82352941,16.65 3.82352941,16.65 C5.04705882,16.8 5.65882353,17.85 5.65882353,17.85 C6.72941176,19.8 8.56470588,19.2 9.17647059,18.9 C9.32941176,18.15 9.63529412,17.55 9.94117647,17.25 C7.18823529,16.95 4.43529412,15.9 4.43529412,11.25 C4.43529412,9.9 4.89411765,8.85 5.65882353,8.1 C5.50588235,7.8 5.04705882,6.6 5.81176471,4.95 C5.81176471,4.95 6.88235294,4.65 9.17647059,6.15 C10.0941176,5.85 11.1647059,5.7 12.2352941,5.7 C13.3058824,5.7 14.3764706,5.85 15.2941176,6.15 C17.5882353,4.65 18.6588235,4.95 18.6588235,4.95 C19.2705882,6.6 18.9647059,7.8 18.8117647,8.1 C19.5764706,9 20.0352941,10.05 20.0352941,11.25 C20.0352941,15.9 17.1294118,16.8 14.3764706,17.1 C14.8352941,17.7 15.2941176,18.45 15.2941176,19.5 C15.2941176,21.15 15.2941176,22.35 15.2941176,22.8 C15.2941176,23.1 15.4470588,23.55 16.2117647,23.4 C21.1058824,21.75 24.6235294,17.25 24.6235294,12 C24.4705882,5.4 18.9647059,0 12.2352941,0 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const InstagramIcon = styled.svg.attrs({
  width: '24px',
  height: '24px',
  version: '1.1',
  viewBox: '0 0 24 24',
  children: (
    <g fill="currentColor" fillRule="evenodd">
      <path d="M12,18 C8.691,18 6,15.309 6,12 C6,8.691 8.691,6 12,6 C15.309,6 18,8.691 18,12 C18,15.309 15.309,18 12,18 Z M12,9 C10.3455,9 9,10.3455 9,12 C9,13.6545 10.3455,15 12,15 C13.6545,15 15,13.6545 15,12 C15,10.3455 13.6545,9 12,9 Z" />
      <path d="M18,24 L6,24 C2.916,24 0,21.084 0,18 L0,6 C0,2.916 2.916,0 6,0 L18,0 C21.084,0 24,2.916 24,6 L24,18 C24,21.084 21.084,24 18,24 Z M6,3 C4.5975,3 3,4.5975 3,6 L3,18 C3,19.4295 4.5705,21 6,21 L18,21 C19.4025,21 21,19.4025 21,18 L21,6 C21,4.5975 19.4025,3 18,3 L6,3 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const TwitterIcon = styled.svg.attrs({
  width: '30px',
  height: '26px',
  version: '1.1',
  viewBox: '0 0 30 26',
  children: (
    <g fill="currentColor" fillRule="evenodd">
      <path d="M30,3.75 C28.875,4.3125 27.75,4.5 26.4375,4.6875 C27.75,3.9375 28.6875,2.8125 29.0625,1.3125 C27.9375,2.0625 26.625,2.4375 25.125,2.8125 C24,1.6875 22.3125,0.9375 20.625,0.9375 C17.4375,0.9375 14.625,3.75 14.625,7.125 C14.625,7.6875 14.625,8.0625 14.8125,8.4375 C9.75,8.25 5.0625,5.8125 2.0625,2.0625 C1.5,3 1.3125,3.9375 1.3125,5.25 C1.3125,7.3125 2.4375,9.1875 4.125,10.3125 C3.1875,10.3125 2.25,9.9375 1.3125,9.5625 C1.3125,9.5625 1.3125,9.5625 1.3125,9.5625 C1.3125,12.5625 3.375,15 6.1875,15.5625 C5.625,15.75 5.0625,15.75 4.5,15.75 C4.125,15.75 3.75,15.75 3.375,15.5625 C4.125,18 6.375,19.875 9.1875,19.875 C7.125,21.5625 4.5,22.5 1.5,22.5 C0.9375,22.5 0.5625,22.5 0,22.5 C2.8125,24.1875 6,25.3125 9.375,25.3125 C20.625,25.3125 26.8125,15.9375 26.8125,7.875 C26.8125,7.6875 26.8125,7.3125 26.8125,7.125 C28.125,6.1875 29.25,5.0625 30,3.75 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const ExternalLink = styled.svg.attrs({
  width: '12px',
  height: '12px',
  version: '1.1',
  viewBox: '0 0 12 12',
  children: (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-729.000000, -70.000000)">
      <g transform="translate(729.000000, 70.000000)" fill="currentColor" fillRule="nonzero">
        <path d="M6,0 L6,1.5 L9.4395,1.5 L5.46975,5.46975 L6.53025,6.53025 L10.5,2.5605 L10.5,6 L12,6 L12,0.75 C12,0.336 11.664,0 11.25,0 L6,0 Z" />
        <path d="M12,12 L0.75,12 C0.336,12 0,11.664 0,11.25 L0,0 L1.5,0 L1.5,10.5 L12,10.5 L12,12 Z" />
      </g>
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const ExclamationMark = styled.svg.attrs({
  width: '48px',
  height: '48px',
  version: '1.1',
  viewBox: '0 0 48 48',
  children: (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-223.000000, -870.000000)">
      <g transform="translate(193.000000, 839.000000)" fill="#FDCE00" fillRule="nonzero">
        <g transform="translate(30.000000, 31.000000)">
          <path
            d="M45,0 L3,0 C1.2,0 0,1.2 0,3 L0,45 C0,46.8 1.2,48 3,48 L45,48 C46.8,48 48,46.8 48,45 L48,3 C48,1.2 46.8,0 45,0 Z M24,36 C22.2,36 21,34.8 21,33 C21,31.2 22.2,30 24,30 C25.8,30 27,31.2 27,33 C27,34.8 25.8,36 24,36 Z M27,27 L21,27 L21,12 L27,12 L27,27 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;
