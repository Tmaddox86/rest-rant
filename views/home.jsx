const React = require('react')
const Def = require('./default')             

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                    <div>           
                      Photo by <a href="https://unsplash.com/@cravethebenefits"> Brenda Godinez </a> On <a href="Unsplash.com">Unsplash</a>
                    </div> 
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
