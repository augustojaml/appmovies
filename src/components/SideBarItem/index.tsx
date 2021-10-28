import { Icons } from '../../global/icons';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import { useMovies } from '../../hooks/useMovies';
import { Container } from './styled';

interface ISideBarItem {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
}

export function SideBarItem({ genre }: ISideBarItem) {
  const { customTheme } = useCustomTheme();
  const { selectedGender, handleChangeGender } = useMovies();

  return (
    <>
      <Container onClick={() => handleChangeGender(genre)}>
        <Icons
          name={genre.name}
          color={selectedGender.name === genre.name ? customTheme.colors.other500 : customTheme.colors.dark100}
        />
        <span
          style={{
            color: selectedGender.name === genre.name ? customTheme.colors.other500 : customTheme.colors.dark100,
          }}
        >
          {genre.title}
        </span>
      </Container>
    </>
  );
}
