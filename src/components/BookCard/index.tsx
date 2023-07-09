import { Book } from "@prisma/client"
import { RatingStars } from "../RatingStars"
import { RatingsDialog } from "../RatingsDialog"
import { Text } from "../Typography"
import { BookDetails, BookImage, BookName, Container, ReadBadge } from "./styles"

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

type BookCardProps = {
  book: BookWithAvgRating
  size?: "md" | "lg"
}

export const BookCard = ({ book, size = 'md' }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94
    },
    lg: {
      width: 108,
      height: 152,
    }
  }

  const currentSize = IMAGE_SIZES[size]

  return (
    <RatingsDialog bookId={book?.id}>
      <Container>
        {book?.alreadyRead && (
          <ReadBadge>LIDO</ReadBadge>
        )}
        <BookImage width={currentSize.width} height={currentSize.height} css={{ minWidth: currentSize.width}} alt={book.name} src={book.cover_url}/>
        <BookDetails>
          <div>
            <BookName size="xs">{book.name}</BookName>
            <Text size='sm' color='gray-400'>{book.author}</Text>
          </div>

          <RatingStars rating={book.avgRating}/>
        </BookDetails>
      </Container>
    </RatingsDialog> 
  )
}