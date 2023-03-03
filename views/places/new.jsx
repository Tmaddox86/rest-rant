const React = require('react')
const Def = require('../default')

function new_form() {
    let message = '' 
        if (message) {
            message = (
                <h4 className = "alert-danger"> {message} </h4>
            )
        }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
                {message}
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
                <div className="form-group col-sm-4">
                    <label htmlfor="founded">Founded Year</label>
                    <input 
                    type="number"
                    className="form-control" 
                    id="founded" 
                    name="founded"
                    value={new Date().getFullYear()} />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
