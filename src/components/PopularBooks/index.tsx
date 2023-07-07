import { Book } from "@prisma/client"
import { BookCard } from "../BookCard"
import { Text } from "../Typography"
import { Link } from "../ui/Link"
import { Container } from "./styles"

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos"/>
      </header>

      <section>
        {Array.from({length: 4}).map((_, index) => (
          <BookCard key={`popular-${index}`} book={{
            author: 'John Doe',
            avgRating: 4,
            cover_url: 'https://github.com/marinapsvreis.png',
            created_at: new Date(),
            id: 'sheauiheuiaheuia',
            name: 'Lorem ipsum dolor sit amet',
            summary: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem',
            total_pages: 100 
          }}/>
        ))}
      </section>
    </Container>
  )
}