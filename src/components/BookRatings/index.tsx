import { useState } from "react"
import { RatingStars } from "../RatingStars"
import { Text } from "../Typography"
import { RatingWithAuthor, UserRatingCard } from "../UserRatingCard"
import { Link } from "../ui/Link"
import { Container } from "./styles"
import { RatingForm } from "../RatingForm"

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({bookId, ratings}: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(false)

  const handleRate = () => {
    setShowForm(true)
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>

      <section>
        {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />}
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating}/>
        ))}
      </section>
    </Container>
  )
}