import { Prato } from 'Types/Prato';
import styles from './Item.module.scss';
import classNames from 'classnames';
import TagsPrato from 'Components/TagsPrato';

export default function Item(props: Prato) {
  const { title, description, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <TagsPrato {...props} />
    </div>
  );
}
