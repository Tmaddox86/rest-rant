const React = require('react')
const Def = require('./default')
function home(){
        return (
          <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"></img>
                  <a href="/places"><button className="btn-primary">Places Page</button></a>
                  <div>
                    Photo By <a href="https://unsplash.com/@briewilly">Chad Montano</a> on <a href="Unsplash.com">Unsplash</a>
                  </div>
                  </div>
              </main>
          </Def>
        )
      }      


module.exports = home