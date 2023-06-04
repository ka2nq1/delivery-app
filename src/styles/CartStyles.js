import styled from 'styled-components';

export const CartStyles = styled.div`
    .topWrap {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 50px;
        margin-bottom: 30px;
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    }

    .resultWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 800px) {
            flex-direction: column;
            gap: 30px;
            align-items: flex-end;
        }
        & > button {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            letter-spacing: 0.01em;
            border-radius: 5px;
            min-width: 245px;
            height: 48px;
            font-size: 16px;
            background-color: transparent;
            color: var(--main-text-color);
            border: 1px solid rgb(150, 150, 150);
            &:hover {
                color: var(--accent-color);
                border-color: var(--accent-color);
            }
        }
        & > div {
            display: flex;
            gap: 40px;
            align-items: center;
            @media (max-width: 800px) {
                flex-direction: column;
                gap: 20px;
            }
            & > h3 {
                font-size: 22px;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        & input {
            border: 1px solid rgb(218, 218, 218);
            border-radius: 5px;
            font-size: 16px;
            color: var(--main-text-color);
            padding: 12px;
            width: 100%;
            outline: none;
            &::placeholder {
                color: rgb(218, 218, 218);
            }
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            &:focus {
                border-color: rgb(150, 150, 150);
            }
        }
    }

    .itemsList {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 510px;
        overflow: scroll;
        & > li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 248px;
            height: 100%;
            border-radius: 10px;
            border: 1px solid var(--border-color);
            padding: 24px;
            & img {
                max-height: 280px;
                max-width: 280px;
            }
            & .priceWrap {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            & p {
                font-size: 20px;
            }
            & button {
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                margin-top: 10px;
                letter-spacing: 0.01em;
                border-radius: 5px;
                margin-left: auto;
                height: 40px;
                font-weight: 500;
                font-size: 14px;
                padding: 0px 12px;
                background-color: transparent;
                color: var(--main-text-color);
                border: 1px solid rgb(150, 150, 150);
                &:hover {
                    color: var(--accent-color);
                    border-color: var(--accent-color);
                }
            }
            & input {
                width: 100%;
                height: 40px;
            }
        }
    }
`;