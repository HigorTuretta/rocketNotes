import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/higorturetta.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem vindo</span>
          <strong>Higor Turetta</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}
