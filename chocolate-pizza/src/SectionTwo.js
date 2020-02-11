import React, { Component } from "react";

export default class SectionTwo extends Component {
    render() {
        return (
        <div>   
            <div class = "ingredient-list">
                <label class = "checklist">
                    <input type="checkbox">1 1/2 cups milk</input>
                </label>
                <label class = "checklist">
                    <input type="checkbox">1/2 cup mascarpone</input>
                </label>   
                <label class = "checklist">
                    <input type="checkbox">1/2 tsp pink salt</input>
                </label>    
                <label class = "checklist">
                    <input type="checkbox">1 lb Black Mission Figs</input>
                </label>  
                <label class = "checklist">
                    <input type="checkbox">1/2 cup brown sugar</input>
                </label>  
                <label class = "checklist">
                    <input type="checkbox">2-4 tbsp water</input>
                </label>   
            </div>

            <div class = "ingredient-list">
                <label class = "checklist"><input type="checkbox">1 1/2 cups heavy cream</input></label>   
                <label class = "checklist"><input type="checkbox" checked><span class = "line-through">1/3 granulated sugar</span></input></label> 
                <label class = "checklist"><input type="checkbox" checked><span class = "line-through">2 egg yolks</span></input></label>  
                <label class = "checklist"><input type="checkbox">1 lemon, juiced</input></label> 
                <label class = "checklist"><input type="checkbox">2 tbsp butter</input></label> 
                <label class = "checklist"><input type="checkbox">1 cup honey roasted pecans, roughly chopped</input></label> 
                </div>
        </div> 
        );
    }
}