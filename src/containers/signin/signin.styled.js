import styled from 'styled-components'
import { fonts, colors, media } from '../../styleVars'

export const Wrap = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap');
    
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .loginBox {
        padding: 30px;
        background-color: #30393D;
        /* margin-top: 50%; */
        border-radius: 7px;
        filter: drop-shadow(0 0 12px #22282B);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        ${media.desktop} {
            padding: 40px;
        }

        h1 {
            font-family: ${fonts.logo};
            color: ${colors.main};
            font-size: 2.8em;

            ${media.desktop} {
                font-size: 3.3em;
            }
        }

        .buttonsBox {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-top: 2em;
            
            ${media.desktop} {
                margin-top: 2.2em;
            }

            input {
                padding: 8px 10px;
                border-radius: 4px;
                border: 1px solid ${colors.darkGray};
                background-color: ${colors.darkerGray};
                font-size: 0.9em;
                color: ${colors.main};

                ${media.desktop} {
                    padding: 10px 12px;
                    width: 90%;
                }

                &:nth-child(2) {
                    margin-top: .6em;
                }
            }
            
            button {
                margin-top: 1.5em;
                padding: 8px 12px;
                border: 1px solid ${colors.blue};
                border-radius: 4px;
                background-color: ${colors.blue};
                color: ${colors.main};
                font-size: 0.8em;

                ${media.desktop} {
                    margin-top: 2em;
                }
            }
        }
    }
`