import { ChartLineUp } from "@phosphor-icons/react"
import { RatingCard } from "../RatingCard"
import { Text } from "../Typography"
import { PageTitle } from "../ui/PageTitle"
import { Container } from "./styles"

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32}/>} css={{ marginBottom: 40 }}/>

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({length: 20}).map((_, i) => (
          <RatingCard key={i} rating={{
            id: "aa",
            rate: 4,
            user: {
              name: 'Marina Valente',
              avatar_url: "http://github.com/marinapsvreis.png",
              email: 'marinapsvreis@gmail.com',
              id: 'sheuahie',
              created_at: new Date(),
            },
            book: {
              author: 'John Doe',
              cover_url: "http://github.com/marinapsvreis.png",
              id: 'sehuiaheuiah',
              name: 'John Doe',
              summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, rerum. Praesentium provident natus hic, vero ipsum eos excepturi corporis magni voluptate consequuntur voluptatum rerum perspiciatis vel quidem placeat assumenda incidunt!',
              total_pages: 100,
            },
            created_at: new Date()
          }}/>
        ))}
      </section>
    </Container>
  )
}