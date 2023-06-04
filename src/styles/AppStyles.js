import styled from 'styled-components';

export const AppStyles = styled.div`
    & * {
        transition: 0.1s ease;
    }
    padding: 20px 40px;
    @media (max-width: 600px) {
        padding: 20px 20px;
    }

    .divider {
        background-color: var(--border-color);
        width: 1px;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 50px;
        margin-bottom: 30px;
        padding-left: 10px;
    }

    .mainButton {
        cursor: pointer;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        letter-spacing: 0.01em;
        background-color: var(--accent-color);
        color: var(--light-text-color);
        border-radius: 5px;
        border: none;
        min-width: 280px;
        height: 50px;
        line-height: 24px;
        font-size: 16px;
        padding: 0px 12px;
        &:hover {
            background-color: var(--button-hover-color)
        }
    }

    .navList {
        display: flex;
        gap: 20px;
        & li {
            font-size: 20px;
            line-height: 24px;
        }
        & .active {
            color: var(--accent-color);
        }
    }
`;