import { AuthButtons } from "@/components/AuthButtons";
import { Heading, Text } from "@/components/Typography";
import { LoginContainer, LogoSection, WelcomeSection } from "@/styles/pages/login";

export default function Login() {
  return <LoginContainer>
    <LogoSection>
      <img src="/images/logo.svg" alt="BookWise Logo"/>
    </LogoSection>

    <WelcomeSection>
      <Heading size="lg" color="gray-100">Boas vindas!</Heading>
      <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>

      <AuthButtons/>
    </WelcomeSection>
  </LoginContainer>
}