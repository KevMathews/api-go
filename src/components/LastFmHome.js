import React from 'react';
import { useState, useEffect } from 'react';

export default function LastFmHome (props){
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=\${secrets.apiKey}&format=json`);
                const data = await res.json()
                await setData(data.results.albummatches.album)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])
    return (
        <>
        <div className='exampleContainerDiv'>
        <h1>Example Code to Fetch the Data:</h1>
        <br />
        <img src='/img/lastfmfetch.png' />
        <h1>Example Data returned:</h1>
        <div className='exampleFetchContainerDiv'>
                    { 
                        data.map((data) => {
                            return (
                                <><div className='exampleFetchDiv'>
                                    <h2> Album Title: {data.name}</h2>
                                    <h3>Album Artist: {data.artist}</h3>
                                    <img src={data.image[3]['#text']}/>
                                    </div>
                                </>
                            )
                        }) 
                    }
            </div>
            </div>
        </>
    )
}