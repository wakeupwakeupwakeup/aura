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
        <img ref={ref} className={"absolute bottom-[13%] left-[10%] z-10"}
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
                <nav className={"flex gap-8"}>
                    {navigation.map((item) => (
                        <a href={item.link}>{item.title}</a>
                    ))}
                </nav>
            </div>
            <div className={"flex gap-6 items-center"}>
                <a>Feedback</a>
                <a>Консультация</a>
            </div>
        </header>
        <main>
            <section className={"justify-center mt-24 relative"}>
                <div className={"flex flex-col gap-20 max-w-[660px] z-10 relative"}>
                    <h1 className={"flex flex-col gap-1"}>
                        <span className={"gradient text-[17rem]"}>Aura <br/> Marketing</span>
                        <span className={"gradient"}>Agency</span>
                    </h1>
                    <Slide triggerOnce={true} direction={"up"}>
                        <p>We provide innovative marketing solutions for your business</p>
                    </Slide>
                    <DollarCenter />
                </div>
                <Fade className={"flex justify-center"} triggerOnce={true} delay={300}>
                    <img className={"absolute top-0 left-0 z-0"} src={"/images/stars.png"}/>
                </Fade>
                <DollarBottomLeft />
                <DollarBottomRight />
            </section>
            <section className={"mt-72"}>
                <div className="grid grid-cols-3 grid-rows-3">
                    <div className={"flex items-center relative"}>
                        <div className={"absolute -right-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>1</span>
                        </div>
                        <div className={"flex items-start gap-6"}>
                            <img src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex items-center relative col-start-3 text-right">
                        <div className={"absolute -left-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>2</span>
                        </div>
                        <div className={"flex flex-row-reverse items-start gap-6"}>
                            <img src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex items-center relative col-start-1 row-start-3">
                        <div className={"absolute -right-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>3</span>
                        </div>
                        <div className={"flex items-start gap-6"}>
                            <img src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex items-center relative col-start-3 row-start-3 text-right">
                        <div className={"absolute -left-[10%] -top-[20%] inline-block rounded-full bg-yellow-200 text-black w-[3em] h-[3em] leading-[3em] text-center"}>
                            <span>4</span>
                        </div>
                        <div className={"flex flex-row-reverse items-start gap-6"}>
                            <img src={"/icons/check.svg"} />
                            <p>Наша команда состоит из экспертов по маркетингу с богатым опытом работы в различных
                                отраслях.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center col-start-2 row-start-2">
                        <h2>About us</h2>
                    </div>
                </div>
            </section>
            <section className={"flex-col items-center gap-24"}>
                <h2 className={"uppercase"}>Partners</h2>
                <div className={"flex w-full justify-between"}>
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
              <div className={"grid grid-cols-12 grid-rows-2 gap-5 w-full h-[592px]"}>
                  <div className="flex flex-col gap-3.5 relative col-span-5 dashed ">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Social media advertising</h3>
                              <p className={"w-2/3"}>Создание и управление рекламными кампаниями в популярных социальных
                                  сетях.
                              </p>

                          </div>
                          <img className={"absolute -bottom-[10%] right-[30%]"}
                               src={"/images/shape-1.png"}/>
                          <img className={"absolute bottom-[10%] -right-[8%]"}
                               src={"/images/shape-2.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
                  <div className="relative col-span-4 row-span-2 col-start-9 row-start-1 dashed">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Social media advertising</h3>
                              <p className={"w-2/3"}>Создание и управление рекламными кампаниями в популярных социальных
                                  сетях.
                              </p>
                          </div>
                          <img className={"absolute -bottom-[10%] -right-[20%]"}
                               src={"/images/phone.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
                  <div className="flex flex-col gap-3.5 relative col-span-8 col-start-1 row-start-2 dashed">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Social media advertising</h3>
                              <p className={"w-2/3"}>Создание и управление рекламными кампаниями в популярных социальных
                                  сетях.
                              </p>

                          </div>
                          <img className={"absolute -top-[20%] right-[0%] z-10"}
                               src={"/images/shape-4.png"}/>
                          <img className={"absolute -bottom-[35%] right-[10%]"}
                               src={"/images/shape-5.png"}/>
                      </div>
                      <img className={"absolute -left-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -top-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -left-1 -bottom-1"} src={"/icons/corner.svg"}/>
                      <img className={"absolute -right-1 -bottom-1"} src={"/icons/corner.svg"}/>
                  </div>
                  <div className="flex flex-col gap-3.5 relative col-span-3 col-start-6 row-start-1 dashed">
                      <div className={"relative w-full h-full overflow-hidden"}>
                          <div className={"flex flex-col gap-3.5 p-5"}>
                              <h3>Social media advertiasing</h3>
                              <p>Создание и управление рекламными кампаниями в популярных социальных
                                  сетях.
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
