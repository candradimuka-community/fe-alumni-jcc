import About from "../components/large/about"
import Blog from "../components/large/blog"
import Goal from "../components/large/goal"
import Hero from "../components/large/hero"
import Instagram from "../components/large/instagram"
import Reel from "../components/large/reel"
import MainLayout from "../layout/mainlayout"

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Goal />
      {/* <About /> */}
      {/* <Reel /> */}
      <Blog />
      <Instagram />
    </MainLayout>
  )
}
export default Index