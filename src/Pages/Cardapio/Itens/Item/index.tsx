import { Prato } from 'Types/Prato';
import styles from './Item.module.scss';
import TagsPrato from 'Components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function Item(props: Prato) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  id === 1 && console.log(title);

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}

export default memo(Item);
