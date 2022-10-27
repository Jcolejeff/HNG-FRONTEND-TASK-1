import styled from "styled-components";
import { linkData } from "../data";
// import "react-lazy-load-image-component/src/effects/blur.css";
const Link = () => {
	return (
		<>
			<ParentWrapper>
				{linkData.map((item, index) => (
					<CustomDiv
						className="shadow"
						onClick={() => {
							window.open(item.link, "_blank");
						}}
						key={index}
					>
						<p className="text-center">{item.name}</p>
					</CustomDiv>
				))}
			</ParentWrapper>
		</>
	);
};

export default Link;

const CustomDiv = styled.div`
	margin-bottom: 15px;
	border-radius: 15px;
	cursor: pointer;
	align-content: center;
	align-items: baseline;
	justify-content: center;
	width: 40vw;
	padding: 5px;
	background-color: red;
	display: flex;
	height: max-content;
	color: white;
	@media (max-width: 768px) {
		width: 90vw;
		text-align: center;
	}
	:hover {
		background-color: black;
		color: green;
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}
	p {
		flex: 1;
	}
	#image {
		margin-left: 10px;
		width: 50px;
		height: 50px;
	}
`;

const ParentWrapper = styled.div`
	margin-top: 20px;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
