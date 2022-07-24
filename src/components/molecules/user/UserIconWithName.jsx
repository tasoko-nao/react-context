import styled from "styled-components";
import { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { name, image } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <Scontainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <button>編集</button>}
    </Scontainer>
  );
});

const Scontainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: "40514e";
`;
