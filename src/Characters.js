import React from 'react'
import { Link } from 'react-router-dom'

const Characters = () => (
    <div class="container" style="margin-top:100px;">
    <div class="row">
    <div class="col-sm-4">
        <div class="panel panel-info">
        <div class="panel-heading"><a href="{{url_for('frontend.character', name='spiderman')}}">Spider-Man</a></div>
        <div class="panel-body"><img src="http://cdn3-www.superherohype.com/assets/uploads/gallery/spider-man-homecoming/c7thfxlwsaapuf.jpg" class="img-responsive" style="width:100%" alt="Image"></div>
        <div class="panel-footer">
            Spider-Man
        </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="panel panel-danger">
        <div class="panel-heading"><a href="{{url_for('frontend.character', name='ironman')}}">Iron Man</a></div>
        <div class="panel-body"><img src="https://i.pinimg.com/736x/2c/bb/04/2cbb04e7ef9266e1e57a9b0e75bc555f--iron-man-avengers-marvel-iron-man.jpg" class="img-responsive" style="width:100%" alt="Image"></div>
        <div class="panel-footer">
            Iron Man
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="panel panel-success">
        <div class="panel-heading"><a href="{{url_for('frontend.character', name='captainamerica')}}">Captain America</a></div>
        <div class="panel-body"><img src="http://cdn.playbuzz.com/cdn/8ace370e-0453-4890-8fea-995f32ac9530/5efa0fd9-4850-47d4-814b-af367ab3f973.jpg" class="img-responsive" style="width:100%" alt="Image"></div>
        <div class="panel-footer">
            Captain America
            </div>
        </div>
    </div>
    </div>
    </div><br>
)

export default Characters