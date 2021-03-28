import { Button } from '../components/Button';

interface SideBarProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  },
  onClick: () => void;
  selected: number;
}

export function SideBar(props: SideBarProps) {
  return <Button
          title={props.genre.title}
          iconName={props.genre.name}
          onClick={props.onClick}
          selected={props.selected === props.genre.id}
        />
}