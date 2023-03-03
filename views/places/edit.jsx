const React = require('react')
const Def = require('../default')

function edit_form ({place}) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
                <form method="POST" action= {`/places/${place.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name"> Name</label>
                            <input className="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic"> Picture</label>
                            <input className="form-control" type="pic" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city"> City</label>
                            <input className="form-control" type="city" id="city" name="city"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state"> State</label>
                            <input className="form-control" type="state" id="state" name="state"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" type="cuisines" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor= "founded">Founded Year</label>
                        <input
                            type ="number"
                            className = "form-control"
                            id = "founded"
                            name = "founded"
                            defaultvalue = {place.founded}
                        />
                    </div> 
                        <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
          </main>
        </Def>
    )
}


module.exports = edit_form
