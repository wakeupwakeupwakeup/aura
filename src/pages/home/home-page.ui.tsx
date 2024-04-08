import {Contacts, Navigation, Partners} from "./home-page.model.ts"
import { Slide, Fade } from "react-awesome-reveal"
import {useParallax} from "react-scroll-parallax";

const navigation: Navigation = [
    {
        title: 'Header',
        link: '',
    },
    {
        title: 'About',
        link: '',
    },
    {
        title: 'Services',
        link: '',
    },
    {
        title: 'Contact',
        link: '',
    },
]

const partners: Partners = [
    {
        name: "Jane Cooper",
        img: "/images/male.png"
    },
    {
        name: "Jane Cooper",
        img: "/images/male.png"
    },
    {
        name: "Jane Cooper",
        img: "/images/male.png"
    },
    {
        name: "Jane Cooper",
        img: "/images/male.png"
    },
    {
        name: "Jane Cooper",
        img: "/images/male.png"
    },
    {
        name: "Jane Cooper",
        img: "/images/male.png"
    },
]

const contacts: Contacts = [
    {
        icon: "/icons/mail.svg",
        name: "example@gmail.com",
        link: "",
    },
    {
        icon: "/icons/skype.svg",
        name: "Skype",
        link: "",
    },
    {
        icon: "/icons/telegram.svg",
        name: "mwoodo1",
        link: "",
    },
]

function DollarCenter() {
    const { ref } = useParallax<HTMLImageElement>({
        speed: 10,
    })
    return (
        <img ref={ref} className={"absolute bottom-[10%] -left-[8%] md:bottom-[13%] md:left-[10%] z-10"}
             src={"/images/dollars-center.png"}/>
    )
}

function DollarBottomLeft() {
    const { ref } = useParallax<HTMLImageElement>({
        speed: 50,
    })
    return (
        <img ref={ref} className={"absolute -bottom-[80%] -left-[40%] -z-10"}
             src={"/images/dollars-bottom-left.png"}/>
    )
}

function DollarBottomRight() {
    const { ref } = useParallax<HTMLImageElement>({
        speed: 20,
    })
    return (
        <img ref={ref} className={"absolute -bottom-[50%] -right-[40%] -z-10"}
             src={"/images/dollars-bottom-right.png"}/>
    )
}


function HomePage() {
    return (
        <>
            <header className={"flex justify-between"}>
                <div className={"flex gap-24 items-center"}>
                <span className={"uppercase logo text-5xl"}>Aura</span>
                <nav className={"hidden md:flex gap-8"}>
                    {navigation.map((item) => (
                        <a href={item.link}>{item.title}</a>
                    ))}
                </nav>
                </div>
                <div className={"inline-block md:hidden"}>
                    <img src={"/icons/menu.svg"} />
                </div>
                <div className={"hidden md:flex gap-6 items-center"}>
                    <a>Feedback</a>
                    <a>Консультация</a>
                </div>
            </header>
        <main>
            <section className={"justify-center mt-24 relative"}>
                <div className={"flex flex-col gap-20 max-w-[660px] z-10 relative"}>
                    <h1 className={"flex flex-col"}>
                        <span className={"gradient text-[10rem] leading-[10rem] md:text-[17rem]"}>Aura <br/> Marketing</span>
                        <span className={"gradient"}>Agency</span>
                    </h1>
                    <Slide triggerOnce={true} direction={"up"}>
                        <p className={"text-center"}>We provide innovative marketing solutions for your business</p>
                    </Slide>
                    <span className={"text-7xl architectural absolute top-[10%] left-[10%]"}>Welcome</span>
                    <DollarCenter />
                </div>
                <Fade className={"flex justify-center"} triggerOnce={true} delay={300}>
                    <img className={"absolute top-0 left-0 z-0"} src={"/images/stars.png"}/>
                </Fade>
                <DollarBottomLeft />
                <DollarBottomRight />
            </section>
            <section className={"mt-72"}>
                <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-3">
                    <div className={"flex flex-row-reverse items-center relative"}>
                        <div className={"md:absolute -right-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>1</span>
                        </div>
                        <div className={"flex items-start gap-6"}>
                            <img className={"hidden md:inline-block"} src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex items-center relative md:col-start-3 text-right">
                        <div className={"md:absolute -left-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>2</span>
                        </div>
                        <div className={"flex flex-row-reverse items-start gap-6"}>
                            <img className={"hidden md:inline-block"} src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center relative md:col-start-1 md:row-start-3">
                        <div className={"md:absolute -right-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>3</span>
                        </div>
                        <div className={"flex items-start gap-6"}>
                            <img className={"hidden md:inline-block"} src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex items-center relative md:col-start-3 md:row-start-3 text-right">
                        <div className={"md:absolute -left-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>4</span>
                        </div>
                        <div className={"flex flex-row-reverse items-start gap-6"}>
                            <img className={"hidden md:inline-block"} src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center row-start-3 md:col-start-2 md:row-start-2">
                        <h2 className={"text-8xl"}>A little bit <br/> about us</h2>
                    </div>
                </div>
            </section>
            <section className={"flex-col items-center gap-24"}>
                <h2 className={"uppercase"}>Partners</h2>
                <div className={"grid grid-cols-3 md:grid-flow-col md:grid-rows-1 w-full justify-between"}>
                    <Fade cascade={true} damping={0.3} triggerOnce={true}>
                        {
                            partners.map((item) => (
                                <div className={"flex flex-col items-center"}>
                                    <img src={item.img} />
                                    <span>{item.name}</span>
                                </div>
                            ))
                        }
                    </Fade>
              </div>
          </section>
          <section>
              <div className={"grid grid-cols-1 grid-rows-6 md:grid-cols-12 md:grid-rows-2 gap-5 w-full md:h-[592px]"}>
                  <div className="flex flex-col gap-3.5 relative row-span-1 md:col-span-5 dashed min-h-[240px] ">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5 w-2/3"}>
                              <h3>Advertising
                                  on social networks</h3>
                              <p className={"md:w-2/3"}>
                                  Create and manage advertising campaigns on popular social networks.
                              </p>

                          </div>
                          <img className={"absolute -bottom-[10%] right-[20%]"}
                               src={"/images/shape-1.png"}/>
                          <img className={"absolute bottom-[10%] -right-[15%]"}
                               src={"/images/shape-2.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
                  <div className="relative order-4 row-span-2 md:col-span-4 md:row-span-2 md:col-start-9 md:row-start-1 dashed">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Examples of campaigns</h3>
                              <p className={"md:w-2/3"}>
                                  A case study of successful projects with a description of the tasks
                                  set and the results achieved.
                              </p>
                          </div>
                          <img className={"absolute -right-[20%] md:-bottom-[10%] md:-right-[20%] scale-125 md:scale-100"}
                               src={"/images/phone.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
                  <div className="flex flex-col row-span-2 gap-3.5 relative md:col-span-8 md:col-start-1 md:row-start-2 dashed">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Strategic planning</h3>
                              <p className={"w-2/3"}>
                                  Development of marketing strategies based on the goals and needs of the client.
                              </p>
                          </div>
                          <img className={"absolute -bottom-[0%] -right-[20%] md:-top-[20%] md:right-[0%] z-10"}
                               src={"/images/shape-4.png"}/>
                          <img className={"absolute -bottom-[5%] -right-[0%] md:-bottom-[35%] md:right-[10%]"}
                               src={"/images/shape-5.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
                  <div className="flex flex-col row-span-1 gap-3.5 relative md:row-span-1 md:col-span-3 md:col-start-6 md:row-start-1 dashed">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Content Marketing</h3>
                              <p>
                                  Developing high-quality content to attract an audience and strengthen the brand
                              </p>

                          </div>
                          <img className={"absolute -bottom-[40%] -right-[45%]"}
                               src={"/images/shape-3.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
              </div>
          </section>
            <section>
                <div className={"flex flex-col gap-12"}>
                    <h2>Contacts</h2>
                    <div className={"flex gap-6"}>
                        {
                            contacts.map((item) => (
                                <div className={"flex gap-2.5"}>
                                    <img src={item.icon}/>
                                  <a href={item.link}>{item.name}</a>
                              </div>
                          ))
                      }
                  </div>
                  <p>Свяжись с нами, или оставь заявку</p>
              </div>
              <div>

              </div>
          </section>
        </main>
        <footer className={"flex justify-center gap-5 mt-24"}>
            <a>Политика конфиденциальности</a>
            <a>Условия пользования</a>
        </footer>
    </>
  )
}

export default HomePage
