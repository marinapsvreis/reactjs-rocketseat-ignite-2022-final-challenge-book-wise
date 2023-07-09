import { api } from '@/lib/axios'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { CategoriesOnBooks, Category } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { BookWithAvgRating } from '../BookCard'
import { BookRatings } from '../BookRatings'
import { RatingStars } from '../RatingStars'
import { Heading, Text } from '../Typography'
import { RatingWithAuthor } from '../UserRatingCard'
import { BookInfo } from './BookInfo'
import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay } from './styles'

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

type RatingsDialogProps =  {
  bookId: string
  children: ReactNode
}

export const RatingsDialog = ({ bookId, children }: RatingsDialogProps) => {
  const [open, setOpen] = useState(false)

  const { data: book } = useQuery<BookDetails>(['book', bookId], async() => {
    const { data } = await api.get(`/books/details/${bookId}`)
    return data?.book ?? {}
  }, {
    enabled: open
  })

  const ratingsLength = book?.ratings?.length ?? 0

  const categories = book?.categories?.map(item => item?.category?.name)?.join(', ') ?? ""

  console.log(categories)
    
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24}/>
          </DialogClose>

          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage width={171} height={242} alt={book.name} src={book.cover_url}/>
                  <BookContent>
                    <div>
                      <Heading size="sm">
                        {book.name}
                      </Heading>
                      <Text color="gray-300" css={{ marginTop: '$2' }}>
                        {book.author}
                      </Text>
                    </div>

                    <div>
                      <RatingStars rating={book.avgRating} size="md" />
                      <Text color="gray-400" size="sm" css={{ marginTop: '$1' }}>{ratingsLength} {ratingsLength === 1 ? 'avaliação': 'avaliações'}</Text>
                    </div>
                  </BookContent>
                </BookDetailsContainer>

                <BookInfos>
                  <BookInfo icon={<BookmarkSimple />} title="Categorias" info={categories} />
                  <BookInfo icon={<BookOpen />} title="Páginas" info={String(book.total_pages)} />
                </BookInfos>
              </BookDetailsWrapper>

              <BookRatings bookId={bookId} ratings={book.ratings}/>
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}