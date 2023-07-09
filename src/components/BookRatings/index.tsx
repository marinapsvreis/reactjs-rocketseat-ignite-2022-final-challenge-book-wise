import { RatingStars } from "../RatingStars"
import { Text } from "../Typography"
import { RatingWithAuthor, UserRatingCard } from "../UserRatingCard"
import { Link } from "../ui/Link"
import { Container } from "./styles"

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
}

export const BookRatings = ({ratings}: BookRatingsProps) => {
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
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating}/>
        ))}
      </section>
    </Container>
  )
}