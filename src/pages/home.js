 import React,{Component} from 'react';
 import Banner from './../common/banner';
 import Card from './../common/cardbox';
 import Projects from './../common/projects';

 class Home extends Component {
     constructor(props){
         super(props);
         this.state = {
             cardsArr: [
                        {title:"First Title",desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."},
                        {title:"Second Title",desc: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque consectetur adipisicing elit. Sapiente esse necessitatibus neque."},
                        {title:"Third Title",desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."}
                        ],
             projectArr:[
                         {img:"http://placehold.it/700x400", title:"Project One",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
                         {img:"http://placehold.it/700x400", title:"Project Two",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
                         {img:"http://placehold.it/700x400", title:"Project Three",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
                         {img:"http://placehold.it/700x400", title:"Project Four",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
                         {img:"http://placehold.it/700x400", title:"Project Five",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
                         {img:"http://placehold.it/700x400", title:"Project Six",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
                        ]

         }
     }
  render() {

       var cardList = this.state.cardsArr.map((obj)=>{
           return (
               <div className = "col-lg-4 mb-4">
           <Card title = {obj.title} desc = {obj.desc}/>
           </div>)
       })


      var projectList= this.state.projectArr.map((obja) =>{
        return(
          <div className="col-lg-4 col-sm-6 portfolio-item">
              <Projects img = {obja.img} title = {obja.title} desc = {obja.desc}/>
          </div>
        )
      })

    return (
        <div>
            <Banner/>
            <div className="container">
                <h1 className="my-4">Welcome to Modern Business</h1>
                <div className="row">
                    {cardList}
                </div>

                <h2>Portfolio Heading</h2>

                <div className="row">
                    {projectList}
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <h2>Modern Business Features</h2>
                        <p>The Modern Business template by Start Bootstrap includes:</p>
                        <ul>
                            <li>
                                <strong>Bootstrap v4</strong>
                            </li>
                            <li>jQuery</li>
                            <li>Font Awesome</li>
                            <li>Working contact form with validation</li>
                            <li>Unstyled page elements for easy customization</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
                    </div>
                </div>


                <hr/>
                <div className="row mb-4">
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque
                                nemo praesentium cum alias asperiores commodi.</p>
                        </div>
                        <div className="col-md-4">
                            <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
                        </div>
                    </div>
            </div>
        </div>
    );
  }
}
export default Home;


