import styled from 'styled-components'
import { colors, fonts } from '../../styleVars'

export const Wrap = styled.header`
    width: 100%;
    padding: 15px 0;
    background-color: ${colors.black};
    filter: drop-shadow(0 0 8px #22282B);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: ${fonts.logo};
        font-size: 1.8em;
        color: ${colors.main};
        margin-left: 15px;
    }

    .menu {
        margin-right: 15px;
        cursor: pointer;

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

        button {
            background-color: transparent;
            border: none;
            color: ${colors.main};
            font-weight: bold;
            font-size: .7em;
        }
    }
`