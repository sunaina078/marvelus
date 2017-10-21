import React from 'react'
import { Link } from 'react-router-dom'

const Movies = () => (
    <div class="container" style="margin-top:100px;">
         <div class="row">
           <div class="col-sm-4">
             <div class="panel panel-info">
               <div class="panel-heading"><a href="{{url_for('frontend.show', page='guardiansofthegalaxy.html')}}">Guardians of the Galaxy Vol.2</a></div>
               <div class="panel-body"><img src="https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg" class="img-responsive" style="width:100%" alt="Image"></div>
               <div class="panel-footer">
                 Guardians of the Galaxy Vol.2
               </div>
             </div>
           </div>
           <div class="col-sm-4">
             <div class="panel panel-success">
               <div class="panel-heading"><a href="{{url_for('frontend.show', page='theavengers.html')}}">The Avengers</a></div>
               <div class="panel-body"><img src="https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg" class="img-responsive" style="width:100%" alt="Image"></div>
               <div class="panel-footer">
                   The Avengers
                 </div>
             </div>
           </div>
           <div class="col-sm-4">
             <div class="panel panel-danger">
               <div class="panel-heading"><a href="{{url_for('frontend.show', page='spidermanhomecoming.html')}}">Spider-Man: Homecoming</a></div>
               <div class="panel-body"><img src="https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" class="img-responsive" style="width:100%" alt="Image"></div>
               <div class="panel-footer">
                   Spider-Man: Homecoming
                 </div>
             </div>
           </div>
         </div>
       </div><br>
)

export default Movies