import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Profiles } from "../components";

export function SelectProfileContainer({ user, setProfile }) {
  console.log(user);
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Fakeflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
}
