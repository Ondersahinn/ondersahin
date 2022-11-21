import Hero from "@sections/hero";

export default function Home(props : any) {
  return (
    <div>
      <p>ip address: </p>{props.ip}
      <Hero />
    </div>
  )
}