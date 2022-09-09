import Head from "next/head"

const Hero = () => {

  return (
    <>

     
      <section className="mt-16">
        <h1 className="text-5xl font-bold dark:text-white mb-10">Hi there I am<span className="dark:text-purple-600"> Önder Şahin 👋</span></h1>
        <h3 className="text-3xl my-3 dark:text-white">I am Web Developer</h3>
        <p className="text-gray-700 mb-8 dark:text-white">I am continuing my software journey, which I started by studying Informatics in vocational high school, now as a ReactJS Developer. After successfully completing the Software Engineering field at Fırat University, I developed various projects in e-commerce company using technologies such as React, TypeScript, and Redux. I am currently working as a ReactJS Developer in Türk Telekom Yaay project. I continue to develop myself as a MERN Stack in my spare time.</p>


        <ul className="list-outside list-disc  tracking-wide	mb-10">
          <li>🔭 I’m currently working on public E-Commerce developer with nextjs, react js and mongoose, Yaay social media organization developer</li>
          <li> 🌱 I’m currently learning MERN stack developer</li>
          <li> 💬 Ask me about ReactJS, NextJS, ExpressJS, NodeJS, Mongoose</li>
          <li> 📫 How to reach me ondershin@gmail.com</li>
          <li>📄 Know about my experiences  <a href="https://ondersahin.com.tr" target="blank">ondersahin.com.tr</a> </li>
        </ul>

        <h3 className="text-3xl my-3 dark:text-white">Connect with me:</h3>
              
        <div className="badge-base LI-profile-badge" data-locale="tr_TR" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="ondershin" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://tr.linkedin.com/in/ondershin?trk=profile-badge">Önder Şahin</a></div>
                            
        <p className="flex flex-row items-center mb-10">
          <a href="https://www.linkedin.com/in/ondershin/" target="blank">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ondershin" height="30" width="40" />
          </a>
          <a href="https://medium.com/@ondershin" className="ml-4" target="blank">
            <img src="https://user-images.githubusercontent.com/46032537/187526026-21b693c1-d6d7-4c7b-9d26-83a539e50006.svg" className="dark:invert" alt="ondershin" height="30" width="40" />

          </a>
        </p>
        <h3 className="text-2xl my-3 dark:text-white">Languages and Tools:</h3>
        <p className="grid grid-cols-7 mt-5 gap-5 mb-10">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="javascript" width="40" height="40" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
          </a>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
          </a>

        </p>

      </section>
    </>
  )
}

export default Hero