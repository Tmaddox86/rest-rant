const React = require('react')
const Def = require('./default')

function error404 () {
        return (
          <Def>
              <main>
                  <h1>404: PAGE NOT FOUND</h1>
                  <p>Oops, sorry, we can't find this page!</p>
                  <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"></img>
                  <div>
                    Photo By <a href="https://unsplash.com/@anna_tukhfatullina">On</a>Unsplash<a href="Unsplash.com"></a>
                  </div>
              </main>
          </Def>
        )
      }

module.exports = error404