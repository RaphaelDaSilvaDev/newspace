import React, {useState, useEffect} from 'react';

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup} from 'pure-react-carousel';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import {Tec, Title, Buttons} from './styles';

import api from '../../../services/api';

interface Article{
    articles: [{
        title: string,
        description: string,
        url: string,
        urlToImage: string,
    }]
}

interface New{
}

const TecNews: React.FC = () => {
    const apiKey = "78f7934ffe134f30b59f47863a6c9183";
    const [tec, setTec] = useState<Article | null>(null);

    var tecIndex = -1;

    useEffect(() => {
        api.get(`/everything?q=tecnologia&pageSize=3&page=1&language=pt&apiKey=${apiKey}`)
        .then((response) => setTec(response.data))
        .catch((error) => console.log(error));
    },[]);

    return(
    <Tec>
        <Title>
            <h1>Tecnologia</h1>
        </Title>
        <CarouselProvider  naturalSlideWidth={1194} naturalSlideHeight={750} totalSlides={3} currentSlide={1} isIntrinsicHeight={false} className="container">
            <Slider className="slider">
                {tec && (
                    tec.articles.map(n => 
                        <Slide index={tecIndex += 1} key={n.url}>
                            <a href={n.url} target="_blank">
                            <img src={n.urlToImage} alt={n.title}/>
                            <div className="text">
                                <h1>{n.title}</h1>
                                <p>{n.description}</p>
                            </div>
                            </a>
                        </Slide>
                    )
                )}
            </Slider>
            <Buttons>
                <div className="dotTec">
                    <DotGroup />
                </div>
                <div className="btnTec">
                    <ButtonBack><FiChevronLeft size={32}/></ButtonBack>
                    <ButtonNext><FiChevronRight size={32}/></ButtonNext>
                </div>
            </Buttons>
        </CarouselProvider>
    </Tec>
    )
}

export default TecNews