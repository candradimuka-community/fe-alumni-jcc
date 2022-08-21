import About from "../components/large/about"
import Blog from "../components/large/blog"
import Goal from "../components/large/goal"
import Hero from "../components/large/hero"
import Reel from "../components/large/reel"
import Nav from "../components/medium/nav"

const Index = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Goal />
      <About />
      <Reel />
      <Blog />
    </>
  )
}
export default Index