import { Avatar, AvatarProps } from "@vkontakte/vkui";
import styled from "@emotion/styled";

const SvgPath = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", width: 0, height: 0 }}
      id="avatar_rich_svg_graphics_wrapper"
    >
      <defs>
        <clipPath id="AvatarHeptagonSvgClip" clipPathUnits="objectBoundingBox">
          <path d="M 0.316 0.0391 A 0.1164 0.1164 90 0 1 0.4285 0.0089 l 0.3784 0.1014 a 0.1164 0.1164 90 0 1 0.0823 0.0823 l 0.1014 0.3784 a 0.1164 0.1164 90 0 1 -0.0302 0.1125 L 0.6836 0.9605 a 0.1164 0.1164 90 0 1 -0.1125 0.0302 l -0.3784 -0.1014 a 0.1164 0.1164 90 0 1 -0.0823 -0.0823 L 0.0089 0.4285 a 0.1164 0.1164 90 0 1 0.0302 -0.1125 L 0.316 0.0391 Z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

const Root = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarBackground = styled.div`
  width: 78px;
  height: 78px;

  position: absolute;
  background: linear-gradient(260.12deg, #63b4e1 37.48%, #182ffc 77.41%);
  clip-path: url(#AvatarHeptagonSvgClip);
  -webkit-clip-path: url(#AvatarHeptagonSvgClip);
`;

const StyledAvatar = styled(Avatar)`
  clip-path: url(#AvatarHeptagonSvgClip);
  -webkit-clip-path: url(#AvatarHeptagonSvgClip);
`;

const NFTAvatar = ({ src }: AvatarProps) => {
  return (
    <Root>
      <SvgPath />
      <AvatarBackground />
      <StyledAvatar size={72} src={src} />
    </Root>
  );
};

export default NFTAvatar;
