import styled from 'styled-components';

export const CatalogStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }

    .shopItem {
        font-weight: normal;
        font-size: 18px;
        cursor: pointer;
        width: 100%;
        line-height: 26px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 8px 19px;
        border-radius: 5px;
        color: var(--main-text-color);
        margin-bottom: 4px;
        &:hover {
            color: var(--accent-color);
        }
    }

    .shopActiveItem {
        background-color: var(--accent-color);
        color: var(--light-text-color)!important;
    }

    .productsList {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .productItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(50% - 5px);
        height: 400px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        padding: 24px;
        @media (max-width: 800px) {
            width: 100%;
        } 

        & img {
            display: block;
            max-width: 290px;
            max-height: 250px;
            margin: 0 auto;
        }
        & h3 {
            font-size: 18px;
            margin-bottom: 5px;
        }

        & p {
            font-size: 14px;
            margin-bottom: 5px;
            color: var(--second-text-color);
        }

        & button {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
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
    }
`;