import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'Components/TagsPrato';
import NotFound from 'Pages/NotFound';
import PaginaPadrao from 'Components/PaginaPadrao';

export default function Prato() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <button onClick={() => Navigate(-1)} className={styles.voltar}>
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {prato.description}
                  </p>
                </div>
                <TagsPrato {...prato} />
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
