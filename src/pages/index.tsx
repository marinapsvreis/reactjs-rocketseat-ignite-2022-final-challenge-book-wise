import { LatestRatings } from "@/components/LatestRatings"
import { DefaultLayout } from "@/layouts/DefaultLayout"
import { HomeContainer } from "@/styles/pages/home"
import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Inicio">
      {page}
    </DefaultLayout>
  )
}

export default HomePage;
