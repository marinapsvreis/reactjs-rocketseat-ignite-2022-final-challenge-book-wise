import { RatingStars } from "../RatingStars"
import { Text } from "../Typography"
import { UserRatingCard } from "../UserRatingCard"
import { Link } from "../ui/Link"
import { Container } from "./styles"

export const BookRatings = () => {
  const handleRate = () => {
    console.log('Avaliar')
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>

      <section>
        {Array.from({length: 10}).map((_, index) => (
          <UserRatingCard key={index} rating={{
            rate: 2,
            user: {
              name: 'John Doe',
              avatar_url: 'https://github.com/marinapsvreis.png'
            },
            created_at: new Date(),
            description: 'sehauiehauihe uiahsb eujiahnd ujiansuidbha'
          }}/>
        ))}
      </section>
    </Container>
  )
}