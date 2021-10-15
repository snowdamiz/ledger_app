import styled from 'styled-components'
import { colors, fonts, media } from '../../styleVars'

export const Wrap = styled.header`
    width: 100%;
    padding: 15px 0;
    background-color: ${colors.black};
    filter: drop-shadow(0 0 8px #22282B);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.tablet} {
        padding: 18px 0;
    }

    h1 {
        font-family: ${fonts.logo};
        font-size: 1.8em;
        color: ${colors.main};
        margin-left: 15px;

        ${media.tablet} {
            font-size: 2.1em;
        }

        ${media.desktop} {
            font-size: 2.4em;
            margin-left: 18px;
        }
    }

    .menu {
        margin-right: 15px;
        cursor: pointer;

        ${media.desktop} {
            margin-right: 20px;
        }

        .line{
           width: 24px;
           height: 2px;
           border-radius: 3px;
           background-color: ${colors.main};
        
           &:nth-child(2) {
                margin: 5px 0;
           }
        }
    }

    .overlayMenu {
        border-radius: 4px;
        padding: 15px;
        position: absolute;
        right: .8em;
        top: 4.5em;
        background-color: ${colors.black};

        ${media.tablet} {
            padding: 20px;
            right: .9em;
            top: 5.2em;
        }

        ${media.desktop} {
            top: 5.6em;
        }

        button {
            background-color: transparent;
            border: none;
            color: ${colors.main};
            font-weight: bold;
            font-size: .7em;

            ${media.tablet} {
                font-size: .8em;
            }
        }
    }
`