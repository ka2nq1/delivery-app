import styled from 'styled-components';

export const Preloader = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    margin: ${(props) => props.margin};
    border-radius: 8px;
	animation: preloader 3s infinite alternate;
	box-shadow: 0 -200px 100px -120px #c4cacf inset;
	background-color: #eff1f3;

	@keyframes preloader {
		50% {
			background: #eff1f3;
			box-shadow: 0 -200px 100px -100px #f8f8f8 inset;
		}
	}
`