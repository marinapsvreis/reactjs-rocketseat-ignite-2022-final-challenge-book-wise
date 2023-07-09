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

  const sortedRatingsByDate = ratings.sort((a,b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>

      <section>
        {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />}
        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating}/>
        ))}
      </section>
    </Container>
  )
}