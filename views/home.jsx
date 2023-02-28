const React = require('react')
const Def = require('./default')             

function home () {
    return (
        <Def>
          <main>
              <h1>HOME</h1>
               <div>
                  <img src="C:\Users\TMadd\code\rest-rant\public\images\photo-1490474504059-bf2db5ab2348.webp" alt="rest-rant\public\images\photo-1490474504059-bf2db5ab2348.webp" />
                    <div>           
                      Photo by <a href="https://unsplash.com/@cravethebenefits"> Brenda Godinez </a> On <a href="Unsplash.com">Unsplash</a>
                    </div> 
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <h1>Thanks for the picture!</h1>
            </main>
        </Def>
    )
}

module.exports = home
