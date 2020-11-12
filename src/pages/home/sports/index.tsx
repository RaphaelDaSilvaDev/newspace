import React, {useState, useEffect} from 'react';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import {Sports, Title, Buttons, SliderDiv} from './styles';

import api from '../../../services/api';


interface Article{
    articles: [{
        title: string,
        url: string,
        urlToImage: string,
    }]
}

interface New{
}

const SportsNews: React.FC = () => {
    const apiKey = "78f7934ffe134f30b59f47863a6c9183";
    const [sports, setSports] = useState<Article | null>(null);

    var sportsIndex = -1;

    useEffect(() => {
        api.get(`/everything?q=esporte&pageSize=10&language=pt&apiKey=${apiKey}`)
        .then((response) => setSports(response.data))
        .catch((error) => console.log(error));
    },[]);

    return(
    <Sports>
        <Title><h1>Esportes</h1></Title>
        <CarouselProvider naturalSlideWidth={194} naturalSlideHeight={190} totalSlides={2} isIntrinsicHeight={false} className="container">
            <SliderDiv>
                <Slider>
                {sports && (
                    sports.articles.map(n =>
                        <Slide index={sportsIndex += 1}><a href={n.url} key={n.url}>
                            <img src={n.urlToImage} alt={n.title}/>
                            <div className="texts">
                                <h1>{n.title}</h1>
                            </div>
                        </a>
                        </Slide>
                    )
                )}
                </Slider> 
            </SliderDiv>
            <Buttons>
                <ButtonNext><p><FiChevronRight size={32}/></p></ButtonNext>
                <ButtonBack><FiChevronLeft size={32}/></ButtonBack>
            </Buttons>
        </CarouselProvider>
    </Sports>
)}

export default SportsNews;