import styled from "styled-components";
import { profileData } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
	const { photoLink, userName, desc } = profileData;
	return (
		<>
			<HeaderWrapper>
				<CustomImage effect="blur" src={photoLink} />
				<UserNameText>@{userName}</UserNameText>
				<UserNameText>{desc}</UserNameText>
			</HeaderWrapper>
		</>
	);
};
export default Header;

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const CustomImage = styled(LazyLoadImage)`
	border-radius: 50%;
	width: 100px;
	height: 100px;
	margin: 5px;
`;

const UserNameText = styled.h6`
	color: black;
	font-weight: bold;
	text-align: center;
`;
