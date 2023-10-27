import { SortableElement } from 'react-sortable-hoc';
import { Collectible } from '@prisma/client';

type Props = Collectible;

export const SortableItem = SortableElement(
  ({ name, description, image, ...rest }: Props) => (
    <li>
      <div>Name: {name}</div>
      <div>Description: {description}</div>
         <p>only this paragraph will get the style :)</p>
    </li>
  )
);
