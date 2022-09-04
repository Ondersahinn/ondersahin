
const About = () => {

  const bar = (<div className="w-full bg-gray-200 h-1">
    <div className="bg-black dark:bg-amber-400 h-1 w-[10%]"></div>
  </div>)


  const experiences = [
    {
      _id: 1,
      title: 'Kafein Technology Solutions | March 2022 - Continues',
      description: `I am working on Türk Telekom Yaay project within Kafein
                    Yazilim. We are developing projects with NextJS for Türk
                    Telekom. In addition to the middleware services that will
                    communicate with the backend and the client, we are
                    making new developments on the React side. I have
                    developed important special components such as Story,
                    automatic video playback with observer`,
      project: [
        {
          id: 1,
          name: 'Yaay',
          link: 'https://yaay.com.tr/'
        }
      ],
      skils: 'NextJs, TypeScript, Redux, ReactJs'

    },
    {
      _id: 2,
      title: 'Mazaka Yazılım | August 2020 - March 2022',
      description: 'I developed important projects in the field of ECommerce at Mazaka. Apart from that, I built the panel in the existing infrastructure from scratch with ReactJS.',
      project: [
        {
          id: 2,
          name: 'Sahin724',
          link: 'https://www.sahin724.com/'
        },
        {
          id: 3,
          name: 'turkishlawblog',
          link: '#'
        }
      ],
      skils: 'Reactjs, TypeScript, Redux, .Net MVC, MSSQL'
    },
    {
      _id: 3,
      title: 'NETAŞ | 2019 September- 2020 January',
      description: 'I took part in the codenlab project in the R&D department. Our project was a student teacher project that teachers can open a software task according to time and date and solve them in 9 different programming languages',
      project: [],
      skils: 'Reactjs, Nodejs, Mongoose'
    },
    {
      _id: 4,
      title: 'Monovi Bilgi Teknolojileri | 2018 June- 2018 September',
      description: 'Within the scope of Monovi Incudemy(Incubation Academy) training program, I developed projects with my teammates by using technologies such as .net mvc, ms sql, agile scrum, html css js. ',
      project: [],
      skils: '.Net MVC, MSSQL, Agile Scrum, HTML, CSS, JS'
    }
  ]

  const education = [
    {
      _id: '1',
      title: 'Fırat University Software Engineering',
      description: '2016 - 2020 | AGNO: 3.15'
    },
    {
      _id: '2',
      title: 'İto Vakfı Süleyman Taştekin Vocational and Technical Anatolian High School',
      description: '2011- 2015'
    }
  ]
  const skils = [
    'ReactJS',
    'Redux',
    'TypeScript',
    'Rest Api',
    'Git',
    'Agile - Scrum - Jira',
    'Styled Component, SCSS, CSS'
  ]
  const hobbies = [
    'I am interested in playing the violin and clarinet.',
    'I am interested in Swimming and Fitness',
    'I am trying to read, research and learn something new in the software field'
  ]

  return (
    <div className="text-gray-600 dark:text-white font-semibold mt-10">
      <h1 className="dark:text-white text-4xl">About</h1>

      <div className="my-10">
        <div>
          <h4 className="dark:text-white text-xl my-3">Experiences</h4>
          {bar}
        </div>
        {experiences.map((element) => {
          return (
            <div key={element._id} className='dark:text-[#e7e7e7]'>
              <h5 className="dark:text-white mt-7 font-bold text-lg">{element.title}</h5>
              <p className="mt-2">{element.description}</p>
              {element.project.map((project) => {
                return (
                  <a href={project.link} key={'project' + project.id} target='_blank' rel="noreferrer"><span>{project.name}</span></a>
                )
              })}
              <p className="mt-2"> {element.skils} </p>
            </div>
          )
        })}
      </div>
      <div className="my-10">
        <div>
          <h4 className="dark:text-white text-xl my-3">Education</h4>
          {bar}
        </div>
        {education.map((element) => {
          return (
            <div key={'education' + element._id} className='dark:text-[#e7e7e7] '>
              <h5 className="dark:text-white mt-7 font-bold text-lg">{element.title}</h5>
              <p className="mt-2">{element.description}</p>
            </div>
          )
        })}
      </div>
      <div className="my-10">
        <div>
          <h4 className="dark:text-white text-xl my-3">Skils</h4>
          {bar}
        </div>
        <ul className='dark:text-[#e7e7e7] list-disc list-inside mt-7'>
          {skils.map((element, index) => {
            return (
              <li key={'skils' + index}>{element}</li>
            )
          })}
        </ul>

      </div>
      <div className="my-10">
        <div>
          <h4 className="dark:text-white text-xl my-3">Hobbies</h4>
          {bar}
        </div>
        <ul className='dark:text-[#e7e7e7] list-disc list-inside mt-7'>
          {hobbies.map((element, index) => {
            return (
              <li key={'skils' + index}>{element}</li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}

export default About