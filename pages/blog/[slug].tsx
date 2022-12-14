

const BlogDetail = () => {


    return (
        <>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h1>ReactJs &Ouml;zel API Servisi ve Interceptor ile API ??steklerini Takip Etme</h1>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*VjWJqiAXy8A9EFEAO-cY3w.jpeg" /></p>

            <p>Api isteklerini d&uuml;zenli bir ??ekilde y&ouml;netmek ve her component de ayn?? api fonksiyonunu yazmamak i&ccedil;in genel bir yap?? kurabilirsiniz.</p>

            <p>Axios interceptors fonksiyonu api isteklerini takip eder ve hata durumuna g&ouml;re istedi??iniz i??lemleri ger&ccedil;ekle??tirmenizi sa??lar.</p>

            <p>??imdi bir react projesi olu??turup ad??mlar?? beraber yapal??m.</p>

            <p>npm veya yarn ile bir react projesi olu??turup src i&ccedil;ersine constans klas&ouml;r&uuml;n&uuml; a&ccedil;al??m.</p>

            <blockquote>
                <p>Not: npm ile bir react projesi olu??turma (<code>npx create-react-app my-app</code>).<br />
                    yarn ile bir react projesi olu??turma (<code><em>yarn create react-app my-app</em></code>).</p>
            </blockquote>

            <p>Constans klas&ouml;r&uuml; i&ccedil;erisine header.json ve config.json dosyalar??n?? olu??tural??m. config.json dosyas??na kullanaca????m??z urlleri tan??ml??yoruz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*6cUfndHL9c0fPqWkhFhZEA.png" /></p>

            <p>config.json</p>

            <p>header.json dosyas??n da api isteklerindeki kullanaca????m??z content type &lsquo;lar?? belirtiyoruz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*pe-utA22Oj_QhKpvH7jOrw.png" /></p>

            <p>header.json</p>

            <p>??imdi src i&ccedil;erisine api &gt; client klas&ouml;r&uuml; a&ccedil;??p client.js, errorParser.js ve https.js dosyalar??n?? olu??tural??m.</p>

            <p>errorParser.js hatal?? http isteklerini istedi??imiz formata &ccedil;evirece??imiz bir fonksiyon yaz??p export edelim. Api iste??i hataya d&uuml;??t&uuml;??&uuml;nde bu fonksiyon &ccedil;al????arak status ve mesaj?? formatlay??p return etmektedir.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*uVQI82ElGqdyU_Kj92OfRw.png" /></p>

            <p>errorParser.js</p>

            <p>http.js dosyam??z da axios create ederek api iste??i &uuml;zerinde ki ayarlar??m??z?? yap??yoruz. Burada interceptor request ve response y&ouml;netebiliriz. Burada ki &ouml;rnekte her api iste??inde bearer token&rsquo;?? ayr?? ayr?? g&ouml;ndermek yerine interceptor request ile her api iste??inde iletilmesini sa??lad??k.</p>

            <p>Sizler request ve response fonksiyonunda gereksinim duydu??unuz i??lemleri ger&ccedil;ekle??tirebilirsiniz. Axios create ettikten sonra t&uuml;m axios methodlar??n?? http.js &uuml;zerinden y&ouml;neterek interceptor &lsquo;&uuml;n &ccedil;al????mas??n?? sa??layaca????z.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*6nkWnRtJE5xdaOYmqPQUjQ.png" /></p>

            <p>http.js</p>

            <p>client.js dosyas?? axios methodlar??n??n bulundu??u aland??r burada kullanaca????n??z axios methodlar??n?? yaz??p export edelim. Dikkat ederseniz http.js dosyas??nda axios create etmi??tik burada do??rudan axios methodlar??n?? kullanmad??k http.js &uuml;zerinden get, post, delete ve put methodlar??n?? olu??turduk.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*PpyDSRf3ohaMVgWV6N-UQw.png" /></p>

            <p>client.js</p>

            <p>??imdi api &gt; service klas&ouml;r&uuml; a&ccedil;??p i&ccedil;erisine dataParser.js ve generalService.js dosyalar?? olu??tural??m.</p>

            <p>dataParser.js de servisten d&ouml;nen cevab?? success ve error olarak formatlayarak her api cevab??n?? standart bir formata d&ouml;n&uuml;??t&uuml;rm&uuml;?? oluyoruz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*t332HkwoxO9D99tenaxA3A.png" /></p>

            <p>dataParser.js</p>

            <p>Geriye yazm???? oldu??umuz bu yap??da api istekleri i&ccedil;in &ouml;zel dosyalar olu??turup bu dosyalar da ilgili api leri y&ouml;netmek kald??.</p>

            <p>Genel api istekleri i&ccedil;in generalService.js dosyas??n?? olu??turdum. Burada isteklerimizi gruplay??p ona g&ouml;re dosyalar olu??turarak yal??n ve okunabilir servis haz??rlam???? olaca????z.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*7hk4lU8Dpe2v0WC08BOdNQ.png" /></p>

            <p>generalService.js</p>

            <p>Yap??y?? olu??turduktan sonra kullanmak istedi??imiz servisde ki fonksiyonu &ccedil;a????r??p sonucu g&ouml;rebiliriz.</p>

            <p><img alt="" src="https://miro.medium.com/max/1400/1*PFMVHMUqle55usEqckiCWg.png" /></p>

            <p>App.js</p>

            <p>T&uuml;m servislerinizi fonksiyonlara &ccedil;evirerek dinamik bir yap?? olu??turduk. Bu yap??da her component de axios import edip config&rsquo;lerini yada body ayarlamak zorunda kalm??yoruz. D&uuml;zenli ve temiz bir g&ouml;r&uuml;n&uuml;m elde etmi?? olduk.</p>

            <p>Github:&nbsp;<a href="https://github.com/Ondersahinn/axios-interceptor-and-custom-services" target="_blank" rel="noreferrer">https://github.com/Ondersahinn/axios-interceptor-and-custom-services</a></p>

        </>
    )
}

export default BlogDetail