import React from 'react';

export default function Info() {
    
    const exampleData = {
        "slug": "prey",
        "name": "Prey (2017)",
        "playtime": 10,
        "platforms": [],
        "stores": [],
        "released": "2017-05-05",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        "rating": 4.28,
        "rating_top": 5,
        "ratings": [],
        "ratings_count": 1485,
        "reviews_text_count": 13,
        "added": 6120,
        "added_by_status": {},
        "metacritic": 80,
        "suggestions_count": 633,
        "updated": "2021-02-16T09:48:36",
        "id": 39,
        "score": "65.94736",
        "clip": null,
        "tags": [],
        "esrb_rating": {},
        "user_game": null,
        "reviews_count": 1508,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [],
        "parent_platforms": [],
        "genres": []
        }

    return (
        <>            
            <div className='topSection'>
                <div  className='titleImage'>
            <img src='/img/rawg.jpg'></img>
                </div>
                <div className='apiGoLogoDiv'> 
                    <img src='/img/api-go.png'></img>
                </div>
            </div>
        <br />
        <h2>If you dont' have one yet, get your <a target='_blank' href='https://rawg.io/apidocs'>RAWG Api Key</a></h2>
        <h1>RAWG Video Games Api</h1>
        <div className='exampleIntro'>
            <p>
                RAWG Videos Games Api is a open source database that has over 500,000 games for 50 platforms. As said above, all you need is an api key to access the database and the freedom is yours to do what you want with the information given. The database gives the user everything you need to know about any video and is very powerful.
            </p>
        </div>
        <br />
        
        <div className='endpointsDiv'>
  
        <div className='exampleContainerDiv'>


  <div className='exampleTopDiv'>
  <h1>Api Endpoints</h1>
<hr className='exampleHr' />
            <h4>These are the endpoints that would be added to the base URL depending on what the desired search for information is needed</h4>
            <div className='exampleLists'>
                <ul>
                    <li>/games</li>
                    <li>/genres</li>
                    <li>/platforms</li>
                    <li>/publishers</li>
                    <li>/stores</li>
                    <li>/tags</li>
                </ul>
        </div>
            
        Here's an example of the games endpoint that gathers information based upon the query parameters 
            <br />
            <br />
            <i><h4>https://api.rawg.io/api/games?key=API_KEY_GOES_HERE&search=prey</h4></i>
            <br />
            <br />
            Heres an example of the response that you will get back: 


            <pre className='showJson'>
                This is just one of the results from the results key inside the response object:
                {JSON.stringify(exampleData, null, 2)}
            </pre>
        </div>
        <br />
        <br />
        <br />
        <h2>Game Query Parameters</h2>
        <hr className='exampleHr2' />
        <h4> There are different query parameters for each endpoints to help narrow down the search:</h4>
        
        <div className='exampleTable2'>
            <table>
                <thead>
                <tr>
                    <th colspan="2"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><b>Parameter</b></td>
                    <td>Data Type</td>
                    <td><b>Parameter</b></td>
                    <td>Data Type</td>
                </tr>
                <tr>
                    <td><b>page</b></td>
                    <td>integer</td>
                    <td><b>creators</b></td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><b>page_size</b></td>
                    <td>integer</td>
                    <td><b>dates</b></td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><b>search</b></td>
                    <td>string</td>
                    <td><b>updated</b></td>
                    <td>string</td>

                </tr>
                <tr>
                    <td><b>search_precise</b></td>
                    <td>boolean</td>
                    <td><b>platforms_count</b></td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td><b>search_exact</b></td>
                    <td>boolean</td>
                    <td><b>metacritic</b></td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><b>parent_platforms</b></td>
                    <td>string</td>
                    <td><b>exclude_collection</b></td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td><b>platforms</b></td>
                    <td>string</td>
                    <td><b>exclude_additions</b></td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td><b>stores</b></td>
                    <td>string</td>
                    <td><b>exclude_parents</b></td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td><b>developers</b></td>
                    <td>string</td>

                    <td><b>exclude_game_series</b></td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td><b>publishers</b></td>
                    <td>string</td>

                    <td><b>ordering</b></td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><b>genres</b></td>
                    <td>string</td>
                    <td><b>tags</b></td>
                    <td>string</td>
                </tr>
                <tr>

                </tr>
            </tbody>
            </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h2>Genres, Platforms, and Stores Query Parameters</h2>
            <hr className='exampleHr2' />
            <div className='exampleTable3'>
            <table>
                <thead>
                <tr>
                    <th colspan="2"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><b>Parameter</b></td>
                    <td><b>Data Type</b></td>
                </tr>
                <tr>
                    <td><b>Ordering</b></td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><b>page</b></td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td><b>page_size</b></td>
                    <td>integer</td>
                </tr>
                </tbody>
                </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h2>Creator-Roles, Creators, Developers, Tags, and Publishers Query Parameters</h2>
                <hr className='exampleHr2' />
            <div className='exampleTable3'>

            <table>
                <thead>
                <tr>
                    <th colspan="2"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><b>Parameter</b></td>
                    <td><b>Data Type</b></td>
                </tr>
                <tr>
                    <td><b>page</b></td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td><b>page_size</b></td>
                    <td>integer</td>
                </tr>
                </tbody>
            </table>
        </div>
<br />
<br />
<br />
<br />
        <div>
            <h2>Writing out the fetch link</h2>
            <hr className='exampleHr2' />
            <div className='exampleTopDiv'>
            <h4>While creating the fetch link the correct way to write it will be to put the base URL (https://api.rawg.io/api/) 
                <br/><br/>
                followed by the desired enpoint. The selected NEEDS to be followed by a question mark. After the endpoint follows
                <br /><br />
                 the desired query parameters, between every parameter there needs to be an ampersand (&). Take the search example 
                 <br /><br />above for some reference, you can put as many query parameters as desired as long as they are all separated by ambersands (&).</h4>
            
            <p><i>For moore information please visit the <a href='https://api.rawg.io/docs/'>RAWG Api Docs</a></i></p>
        </div></div></div></div>
<br />
<br />
<br />
<br />
  </>
    )
}