import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>
          <p>
            O React é uma biblioteca JavaScript de código aberto utilizada no
            desenvolvimento de interfaces de usuário interativas e dinâmicas.
            Criado pelo Facebook, ele permite a construção de componentes
            reutilizáveis que respondem a alterações de dados em tempo real,
            agilizando o desenvolvimento e otimizando o desempenho das
            aplicações web. Sua abordagem baseada em componentes e a manipulação
            eficiente do DOM tornam o React uma escolha popular entre
            desenvolvedores para a criação de interfaces modernas e responsivas.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rockseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rockseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodeJs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
