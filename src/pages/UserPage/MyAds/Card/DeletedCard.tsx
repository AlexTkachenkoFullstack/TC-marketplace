import React from 'react';
import Card from './Card/Card';
import styles from '../MyAds.module.scss';
import { ICar } from 'types/IСar';

interface IDeletedCarsProps {
  cars: ICar[];
}
const DeletedCard: React.FC<IDeletedCarsProps> = ({cars}) =>{
  
  return (
      <div>
      {cars.length > 0 ? (
        cars.map(car => (
          <Card key={car.id} car={car} />
        ))
      ) : (
        <p className={styles.empty}>На даний момент відсутні видалені оголошення</p>
      )}
    </div>
  );
};

export default DeletedCard;