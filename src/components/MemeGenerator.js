// MemeGenerator will be calling to an API and holding on to data
// need class component for this
import React from 'react'

class MemeGenerator extends React.Component{
    constructor(props){
        super(props)
        //needs state
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            isLoaded: false,
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */
    
    componentDidMount(){
        //fetch data
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs: memes})
        })
    }
    
    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    
    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
    handleClick(e){
        e.preventDefault()
        const max = this.state.allMemeImgs.length
        const num =  Math.floor(Math.random() * max)
        const url = this.state.allMemeImgs[num].url
        this.setState({randomImage: url})
    }
    
    render(){
        
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleClick}>
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                    }  
                    <input 
                    type="text" 
                    name="topText" 
                    value={this.state.topText} 
                    placeholder="topText"
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text" 
                    name="bottomText" 
                    value={this.state.bottomText} 
                    placeholder = "bottomText"
                    onChange={this.handleChange}
                    />
                
                    <button onClick={this.handleClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}



export default MemeGenerator
