const React = require('react')
const Def = require('../default')

function show ({place}) {
  let comments = (
    <h3 className="inactive"> No Comments Yet! </h3>
  )
  let rating = (
    <h3 className="inactive"> Not Rated Yet! </h3>
  )
  if (place.comments.length) {  
    let sumRating = place.comments.reduce((tot,c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round (sumRating / place.comments.length)
    let stars = '';
    for ( let i = 0; i < averageRating; i++) {
      stars += '*'
    } 
    rating = (
      <h3> 
      {stars}  
      </h3>
    )
    comments = place.comments.map( (c, index)=> {
      return (
          <div key = { index }>
            <h2 className="rant mt-2">
              {c.rant ? 'Rant!' : 'Rave!'}
            </h2>
            <h3> <strong> - {c.author} </strong> </h3>
            <h4>{c.content}</h4>
            <h4>Rating: {c.stars}</h4>
            <form action= {`/places/${place._id}/comment/${c._id}?_method=DELETE`} method="POST">
              <input className="mb-2 btn btn-danger" type= "submit" value = "Delete"></input>
            </form>
          </div>
    )})}
  
    return (     
    <Def>
        <main>
              <div className="row">
                <div className="col-sm-6">
                  <img src={place.pic} alt={place.name} />
                  <h3> Located in {place.city}, {place.state} </h3>
                </div>
              </div>
              <div className="col-sm-6">
                <h2> Description </h2>
                <h3> {place.showEstablished()} </h3>
                <h2>Rating</h2>
                  {rating}
                <h4> Serving {place.cuisines} </h4>
                  <a href= {`/places/${place._id}/edit`} className= "btn btn-warning"> Edit </a>
                    <form method= "POST" action= {`/places/${place._id}?_method=DELETE`}>
                      <button type= "submit" className="btn btn-danger"> Delete </button>
                    </form>
            </div>
            <div>
              <h2> Comments </h2>
                {comments}
            </div>
            <div>
              <form className="row justify-content-md-center" action={`/places/${place._id}/comment`} method="POST">
                <div className= "form-group col-md-4 mt-2">
                    <label htmlFor="author"> Name:</label>
                    <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!"/>
                </div>
                <div className= "form-group col-md-4 mt-2">
                    <label htmlFor="stars"> Rating: </label>
                    <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>
                </div>
                <div className= "form-group col-md-4 mt-2">
                    <label htmlFor="rant"> Is this a rant?</label>
                    <br/>
                    <input type="checkbox" id="rant" name="rant"/>
                </div>
                <div className= "form-group col-md-4 mt-2">
                    <label htmlFor="content"> Comment: </label>
                    <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place!"/> 
                                     
                </div>
                <div className="col mt-2">
                  <button className="btn btn-primary mt-2" type="submit"> Submit </button> 
                </div>                 
              </form>
            </div>
      </main>
    </Def>
)}
     
module.exports = show

