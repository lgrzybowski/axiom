import React, { Component, PropTypes } from 'react';
import Logo from './Logo';

export default class LogoHorizontal extends Component {
  static propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
  };

  render() {
    const viewBoxWidth = 150;
    const viewBoxHeight = 30;

    /* eslint-disable max-len, react/jsx-sort-props */
    return (
      <Logo { ...this.props } viewBoxHeight={ viewBoxHeight } viewBoxWidth={ viewBoxWidth }>
        <svg height="100%" viewBox={ `0 0 ${viewBoxWidth} ${viewBoxHeight}` } width="100%" x="0%" y="0%">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
              <g>
                <path d="M21.006,12.493 C21.298,11.143 22.629,10.285 23.98,10.576 C25.33,10.867 26.188,12.199 25.896,13.549 C25.604,14.899 24.273,15.757 22.923,15.466 C21.573,15.174 20.714,13.843 21.006,12.493" fill="#F18700"></path>
                <path d="M12.483,13.598 C12.93,11.531 14.967,10.218 17.034,10.665 C19.101,11.111 20.414,13.148 19.968,15.215 C19.521,17.282 17.484,18.596 15.417,18.149 C13.349,17.703 12.036,15.665 12.483,13.598" fill="#F46B00"></path>
                <path d="M19.384,18.708 C19.759,16.973 21.47,15.869 23.207,16.244 C24.943,16.619 26.046,18.33 25.671,20.067 C25.296,21.803 23.584,22.906 21.848,22.531 C20.112,22.155 19.009,20.444 19.384,18.708" fill="#FF586F"></path>
                <path d="M28.923,15.707 C29.167,14.577 30.281,13.859 31.411,14.103 C32.541,14.347 33.259,15.461 33.015,16.591 C32.771,17.721 31.657,18.439 30.527,18.195 C29.397,17.951 28.679,16.837 28.923,15.707" fill="#8EA53C"></path>
                <path d="M10.51,21.398 C10.718,20.434 11.669,19.821 12.634,20.029 C13.598,20.237 14.211,21.188 14.003,22.152 C13.795,23.117 12.843,23.731 11.879,23.521 C10.914,23.314 10.302,22.363 10.51,21.398" fill="#F6BE00"></path>
                <path d="M18.262,8.695 C18.453,7.813 19.322,7.252 20.204,7.443 C21.086,7.634 21.647,8.503 21.456,9.385 C21.265,10.267 20.396,10.828 19.514,10.637 C18.633,10.446 18.072,9.577 18.262,8.695" fill="#F6BE00"></path>
                <path d="M8.605,1.607 C8.719,1.084 9.235,0.751 9.759,0.864 C10.281,0.978 10.615,1.494 10.502,2.018 C10.388,2.541 9.873,2.874 9.349,2.761 C8.825,2.648 8.492,2.131 8.605,1.607" fill="#9C7CB6"></path>
                <path d="M0.021,25.31 C0.128,24.814 0.617,24.498 1.113,24.606 C1.609,24.712 1.924,25.202 1.818,25.697 C1.71,26.193 1.221,26.509 0.725,26.402 C0.229,26.294 -0.086,25.806 0.021,25.31" fill="#969C9E"></path>
                <path d="M17.714,28.454 C17.863,27.765 18.542,27.327 19.231,27.477 C19.92,27.625 20.358,28.304 20.209,28.993 C20.06,29.682 19.381,30.12 18.692,29.971 C18.003,29.822 17.565,29.143 17.714,28.454" fill="#008EB4"></path>
                <path d="M7.002,14.51 C7.151,13.821 7.829,13.384 8.518,13.533 C9.207,13.681 9.645,14.36 9.497,15.049 C9.348,15.739 8.668,16.176 7.979,16.027 C7.29,15.879 6.853,15.2 7.002,14.51" fill="#5FC3E6"></path>
                <path d="M15.936,19.908 C16.073,19.274 16.698,18.872 17.331,19.009 C17.966,19.146 18.368,19.771 18.231,20.404 C18.094,21.038 17.469,21.441 16.835,21.304 C16.201,21.167 15.799,20.542 15.936,19.908" fill="#F46B00"></path>
                <path d="M27.606,5.626 C27.761,4.91 28.468,4.454 29.184,4.609 C29.901,4.764 30.356,5.471 30.201,6.187 C30.047,6.904 29.34,7.359 28.623,7.204 C27.907,7.049 27.452,6.343 27.606,5.626" fill="#5FC3E6"></path>
                <path d="M27.854,23.893 C27.76,23.309 28.158,22.758 28.742,22.664 C29.327,22.57 29.877,22.968 29.972,23.553 C30.065,24.137 29.667,24.688 29.083,24.781 C28.498,24.875 27.948,24.478 27.854,23.893" fill="#F18700"></path>
              </g>
              <path d="M50.169,16.117 C50.169,17.471 49.892,18.569 49.369,19.293 C48.882,19.965 48.175,20.291 47.206,20.291 C45.43,20.291 44.636,18.835 44.636,17.394 L44.636,14.45 C44.636,13.012 46.185,12.058 47.21,12.058 C48.177,12.058 48.884,12.383 49.368,13.052 C49.915,13.808 50.169,14.781 50.169,16.117 M47.225,10.057 C48.763,10.064 49.993,10.638 50.882,11.764 C51.759,12.875 52.167,14.258 52.167,16.119 C52.167,18.03 51.747,19.491 50.882,20.587 C49.996,21.712 48.765,22.286 47.225,22.293 L47.21,22.293 C44.512,22.293 42.637,20.278 42.637,17.396 L42.637,5.91 L44.634,5.921 L44.639,10.882 C45.406,10.368 46.319,10.061 47.191,10.057 L47.225,10.057 Z M76.787,10.055 C79.593,10.055 81.269,11.855 81.272,14.87 L81.272,22.098 L79.272,22.098 L79.272,14.852 C79.272,12.327 77.536,12.054 76.789,12.054 C76.042,12.054 74.305,12.327 74.305,14.852 L74.305,22.096 L72.304,22.096 L72.304,14.87 C72.304,11.855 73.98,10.055 76.787,10.055 Z M59.445,12.145 C59.163,12.072 58.901,12.054 58.705,12.054 C57.959,12.054 56.222,12.327 56.222,14.852 L56.222,22.096 L54.221,22.096 L54.221,14.87 C54.221,11.855 55.897,10.056 58.704,10.056 C59.154,10.056 59.575,10.102 59.965,10.192 L59.445,12.145 Z M90.859,5.909 L92.859,5.908 L92.859,17.394 C92.859,20.276 90.985,22.291 88.301,22.291 L88.271,22.291 C86.73,22.284 85.5,21.71 84.611,20.585 C83.746,19.486 83.325,18.025 83.325,16.117 C83.325,14.256 83.733,12.873 84.611,11.763 C85.497,10.636 86.728,10.063 88.268,10.055 L88.302,10.055 C89.175,10.059 90.089,10.367 90.854,10.878 L90.859,5.909 Z M90.86,14.45 C90.86,13.013 89.313,12.06 88.29,12.06 L88.288,12.06 C87.318,12.06 86.612,12.385 86.129,13.054 C85.582,13.808 85.328,14.782 85.328,16.119 C85.328,17.492 85.598,18.562 86.129,19.296 C86.614,19.967 87.322,20.293 88.291,20.293 C90.066,20.293 90.86,18.838 90.86,17.396 L90.86,14.45 Z M134.215,12.054 C133.238,12.054 132.526,12.38 132.04,13.052 C131.5,13.795 131.238,14.817 131.238,16.172 C131.238,17.526 131.5,18.548 132.041,19.294 C132.526,19.965 133.238,20.291 134.215,20.291 C134.965,20.291 135.607,20.075 136.124,19.65 C136.559,19.292 136.79,18.766 136.83,18.045 L138.772,18.151 C138.713,19.495 138.286,20.457 137.43,21.177 C136.551,21.918 135.469,22.293 134.217,22.293 C132.665,22.293 131.424,21.718 130.527,20.584 C129.661,19.489 129.241,18.046 129.241,16.174 C129.241,14.304 129.661,12.86 130.526,11.761 C131.421,10.627 132.663,10.052 134.217,10.052 C135.467,10.052 136.548,10.427 137.43,11.168 C138.29,11.892 138.716,12.827 138.772,14.169 L136.83,14.269 C136.79,13.551 136.559,13.053 136.123,12.693 C135.607,12.269 134.965,12.054 134.215,12.054 Z M145.786,10.055 C147.096,10.055 150,10.724 150,15.03 L150,22.094 L147.992,22.094 L147.992,14.848 C147.992,13.405 147.173,12.083 145.63,12.083 C143.981,12.083 142.996,13.44 142.996,14.932 L142.996,22.096 L140.995,22.096 L140.995,5.929 L142.996,5.929 L142.996,10.991 C143.086,10.921 143.179,10.855 143.274,10.792 C144.013,10.303 144.749,10.055 145.786,10.055 Z M127.469,20.17 L128.585,21.668 C127.622,22.462 126.21,22.585 125.096,22.047 C124.054,21.534 123.293,20.43 123.293,18.775 L123.293,12.343 L122.003,12.343 L122.003,10.336 L123.292,10.336 L123.292,7.973 L125.304,7.973 L125.304,10.338 L127.447,10.338 L127.447,12.345 L125.306,12.345 L125.306,18.778 C125.306,19.458 125.6,19.908 125.939,20.149 C126.402,20.481 126.983,20.547 127.469,20.17 Z M120.247,14.057 L120.247,22.096 L118.69,22.096 L118.626,21.354 C117.725,22.016 116.577,22.293 115.513,22.293 C112.777,22.293 111.009,20.839 111.009,18.589 C111.009,17.348 111.516,16.303 112.439,15.648 C113.462,14.92 114.767,14.859 116.017,14.859 L118.25,14.859 L118.25,14.04 C118.25,13.402 118.061,12.929 117.675,12.594 C117.261,12.236 116.636,12.054 115.817,12.054 C115.051,12.054 114.439,12.229 114,12.573 C113.666,12.836 113.481,13.147 113.435,13.528 L111.494,13.363 C111.542,12.465 111.947,11.691 112.7,11.062 C113.498,10.394 114.547,10.056 115.816,10.056 C117.104,10.056 118.165,10.396 118.971,11.065 C119.817,11.769 120.247,12.775 120.247,14.057 Z M118.248,17.841 L118.248,16.867 L116.048,16.867 C114.996,16.867 114.211,16.896 113.67,17.255 C113.122,17.619 113.008,18.2 113.008,18.624 C113.008,20.139 114.761,20.302 115.513,20.302 C116.775,20.302 118.248,19.658 118.248,17.841 Z M70.09,14.057 L70.09,22.096 L68.534,22.096 L68.469,21.354 C67.57,22.016 66.42,22.293 65.357,22.293 C62.62,22.293 60.852,20.839 60.852,18.589 C60.852,17.348 61.36,16.303 62.282,15.648 C63.306,14.92 64.611,14.859 65.861,14.859 L68.094,14.859 L68.094,14.04 C68.094,13.402 67.905,12.929 67.518,12.594 C67.104,12.236 66.479,12.054 65.661,12.054 C64.894,12.054 64.283,12.229 63.844,12.573 C63.51,12.836 63.325,13.147 63.279,13.528 L61.337,13.363 C61.385,12.465 61.79,11.691 62.543,11.062 C63.342,10.394 64.39,10.056 65.66,10.056 C66.948,10.056 68.009,10.396 68.814,11.065 C69.661,11.769 70.09,12.775 70.09,14.057 Z M68.092,17.841 L68.092,16.867 L65.891,16.867 C64.84,16.867 64.054,16.896 63.514,17.255 C62.966,17.619 62.851,18.2 62.851,18.624 C62.851,20.139 64.604,20.302 65.357,20.302 C66.619,20.302 68.092,19.658 68.092,17.841 Z M108.382,10.252 L110.275,10.252 L106.873,22.098 L104.979,22.098 L102.523,13.549 L100.068,22.098 L98.175,22.098 L94.772,10.252 L96.666,10.252 L99.121,18.801 L101.577,10.252 L103.471,10.252 L105.926,18.801 L108.382,10.252 Z" fill="#504F4F"></path>
            </g>
          </g>
        </svg>
      </Logo>
    );
    /* eslint-enable max-len, react/jsx-sort-props */
  }
}