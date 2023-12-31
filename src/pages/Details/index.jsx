import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate()

  async function handleRemove(){
    const confirm = window.confirm('Deseja realmente remover a nota?')

    if(confirm){
      await api.delete(`/notes/${params.id}`).then(() => navigate(-1))
    }
  }

  useEffect(() => {
    async function fethNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fethNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && ( //somente para exibir se existe o data
        <main>
          <Content>
            <ButtonText onClick={handleRemove} title="Excluir Nota" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={() => navigate(-1)} />
          </Content>
        </main>
      )}
    </Container>
  );
}
