import React, {useState, useEffect} from 'react';

import {Top} from './styles';

import api from '../../../services/api';
import { time } from 'console';

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

const TopNews: React.FC = () => {
    const apiKey = "78f7934ffe134f30b59f47863a6c9183";
    const [topNew, setTopNew] = useState<Article | null>(null);

    const topNewClassName = ["main", "sideOne", "sideTwo", "sideThree"];
    var topNewIdName = -1;

    useEffect(() => {
        api.get(`/top-headlines?country=br&category=sports&pageSize=4&apiKey=${apiKey}`)
        .then((response) => setTopNew(response.data))
        .catch((error) => console.log(error));
    },[]);

    return(
    <Top>
        <div className="container">
            {topNew && (
                topNew.articles.map(n => 
                    <a href={n.url} target="_blank" key={n.url} className={topNewClassName[topNewIdName += 1]}>
                        <img src={n.urlToImage} alt={n.title}/>
                        <div className="texts">
                            <h1>{n.title}</h1>
                            <p>{n.description}</p>
                        </div>
                    </a>
                )
            )}
        </div>
    </Top>
)}

export default TopNews;