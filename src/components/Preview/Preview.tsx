import { FC } from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import styles from './Preview.module.scss';
import { UploadedImage } from 'types/UploadedImage';

type Props = {
  resetFirstPhotoSelected:()=>void;
  onDelete: (image: string,name:string) => void;
  image: UploadedImage;
  handleChekedItem: (item: string,name:string) => void;
  isChecked: boolean 
};

export const Preview: FC<Props> = ({ image, onDelete, handleChekedItem,isChecked,resetFirstPhotoSelected }) => {
  const { id, name, url } = image;
  const handleChange = () => {
    handleChekedItem(id,name);
  };
  const handleDelete = () => {
    onDelete(id, name);
    resetFirstPhotoSelected();
  };
  return (
    <div className={styles.imgCard}>
      <div className={styles.box_input}>
        <input
          type="checkbox"
          id={`foto-${id}`}
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor={`foto-${id}`} className={styles.label_title}>
          Головне
        </label>
      </div>
      <button className={styles.close_btn} onClick={handleDelete}>
        <Close />
      </button>
      {typeof url === 'string' && <img src={url} alt={name} />}
    </div>
  );
};
