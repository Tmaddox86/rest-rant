const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" type="pic" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Place City</label>
                    <input className="form-control" type="city" id="city" name="city"/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">Place State</label>
                    <input className="form-control" type="state" id="state" name="state"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Place Cuisines</label>
                    <input className="form-control" type="cuisines" id="cuisines" name="cuisines" required/>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place"/>
                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input className="form-control" id="founded" name="founded" />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
