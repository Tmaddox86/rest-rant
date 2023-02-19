const React = require('react')
const Def = require('../default')

<a href= "{`/places/${data.id}/edit`}" className="btn btn-warning"> Edit </a>

<form method="POST" action={`/places/${data.id}?_method=DELETE`}>
  <button type="submit" className="btn btn-danger"> Delete </button>
</form>

//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}
// currently unrated no comments yet

module.exports = show
