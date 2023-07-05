import { AuthButton, Container } from "./styles"

export const AuthButtons = () => {
  return <Container>
    <AuthButton>
      <img src="/images/icons/google.svg" alt="Google Logo"/>
      Entrar com Google
    </AuthButton>
    <AuthButton>
      <img src="/images/icons/github.svg" alt="Github Logo"/>
      Entrar com Github
    </AuthButton>
    <AuthButton>
      <img src="/images/icons/rocket.svg" alt="Rocket Icon"/>
      Entrar como visitante
    </AuthButton>
  </Container>
}