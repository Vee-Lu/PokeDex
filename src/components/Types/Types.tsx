import Type from './Type'
import Header from '../Header'
import Footer from '../Footer'
import './type.css'

function Types() {
    return (
        <div className="typesContainer">
            <Header/>
            <div className="types">
                <div className="row">
                    <Type>Fire</Type>
                    <Type>Water</Type>
                    <Type>Grass</Type>
                    <Type>Normal</Type>
                    <Type>Flying</Type>
                    <Type>Fighting</Type>
                </div>

                <div className="row">
                    <Type>Ground</Type>
                    <Type>Bug</Type>
                    <Type>Electric</Type>
                    <Type>Ice</Type>
                    <Type>Ghost</Type>
                    <Type>Psychic</Type>
                </div>

                <div className="row">
                    <Type>Dragon</Type>
                    <Type>Fairy</Type>
                    <Type>Dark</Type>
                    <Type>Rock</Type>
                    <Type>Steel</Type>
                    <Type>Poison</Type>
                </div>
            </div> 
            <Footer>Font</Footer>
        </div>
    )
}

export default Types;