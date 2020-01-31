import { createGlobalStyle } from 'styled-components'

export const GlobalIonfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1580371259215'); /* IE9 */
    src: url('./iconfont.eot?t=1580371259215#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWsAAsAAAAACngAAAVgAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqIIIZhATYCJAMUCwwABCAFhG0HRhvjCBEVpGeS/ZAkVe7ijZaRgAgYA5OBPCxQAAAAAEA8gHO9L017v8sNWSGAJLQEFoDd5KYIhCVUbER//r3Xc19flbQOSiGoJmRmujlvc/AwC1/gFzd1liufO3Zj9WkMjY884R6QE1aMzwfHjJe8geXZbI4ZSdGAowEPLCKxvmz4/A+ID/SL7CIesQAeJiDpKgaaNqOGgVIOjQoI27f06wFlRC7PwQelqAYszCGcBmtlNld3Daec3w//DQklyBQR0MRFG0t7w6RfMb9xK/G/qMNSQmd7WjDLiOgH5IStoH696HH7OfwERedGAaXWLeNX/19pv/H/FYntx5xLfilJyGv/4WWEGiB+YxwziZevGcOgB4L+uFTEBSNwKoHf9YAM+7SQhNYgrCLcAyTu1uY3yDSWlXYk3sqhuQth19TJ010XAr1DA50T15hJA+uta1Q/7LpHS4+juAEgBexUkm6gTp7vxKQcdt8mEDfjhrMIjV/x8An3YB5zbxp7/zXPKoatKyc8mM4/nB/+0mnMvTeDnaQdXujew3LH8+8Cidv67rvlQ1RI50sajW7eSUtJUhHSNiqh+CWa1taTIMscjmRoNypMUil0RDMoAIdlgpcwVdWEC9BhkEswaYOZojppy9Fw/Bi5frMnwHlCc6zjRLKdSTS6qFLYUUIGNnDLMewKOtlCP3zIayaCkUlf07aQEpkwGQ+FlamxS/vdu8cQ8dpGslTRNEqlLVvDyzUL5ada6B6Saras0djRB1PfTdu43kTcg7fvcDxKXXmQZBVSMdadumGH90P08D2DRSriJoniKr0or+1fTkTg797BYUY+1bf8dsS0232c/q+d+mBAXj2rK1or5D3U/z5Vo85nDERF4YChkZzg2KVePSnrXVd+1FXPNr/n+9/215DfPPPNm0GzHKr2TZktdtdx4uzuEVPGVTnNGghtctVvV2JKoYOw018YOlTwHyIIQ70XHzJE8ENul7rQr+zOdppV10NMKK22u9Lh59O+w9odzqZtosuwbfZXGtENPc/Ymex6Jv5H4YhT64PG8ljPBtPBoFXJaxxGNF5jbzfHRm9rcjbZWtkZu5+GLOux18/oFL4BFCG3ZoTrke/zYaFLCB02Qp9QeC+hVnqOS+0VtT4OteCb+l+UJFcUD+4a46QU645ZwVPUtb9tWpFhMIY0rDu/ab7nqj2tbWP7Rx0Xrqx9+H38zn87e3bPaerCztg2wmfdsvJF4acsh15P6H6hg9ZlwUcCP65e5XU8p3ICVPPrv+XQflv0lidPlgmJzMQNC1oHRZRwcOjhnqn6Lc+V1ucsmxyamTyGYU3eaFCAGFbMZGy/dwrE+ybvFB8Tx5rtzSz7rEV5flRvhiberl9800oYB6oqvoxAdSj+7f9TPYpDYgPVgzguNj67g/TqtcipW7OcX5Pp69z2edWObMdWHcqhHuMBZJRmPKmMknW5zEKKIhcLDbpoLLx5EowZDybrCQ3T0ot2hG1KJxOU2gSQadAFolI3RI7pB4W6YVBTmghJX+XL61oZIQq5PdDHTAyC5nZCpqkXEDV3HZFjnkOhrU9Q0zxEEDAfYbbh1EEQ2JXESGMK8TcUCbVcV2nmpr5gZupIhlkO4QOlKlwQuH48dIctyjamKJuFWnPgkhq4xY7DuiboJJWYaDfXujv0PA49yE2ocZgrEopoKAVi30AhQVrcaq2xxM+/QBmjFpE5RSXaD0hSis5BwOWXQNzx21JFx5KtWJmQJrwc4EwyaYBbQotqzU9AB/croYTmymt4O4c8ohkvy3f7FzbHmPGrlET3KUIWYshDEWp6k6ORIqMMDeKiLMbPFKVFmzkO') format('woff2'),
    url('./iconfont.woff?t=1580371259215') format('woff'),
    url('./iconfont.ttf?t=1580371259215') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1580371259215#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`