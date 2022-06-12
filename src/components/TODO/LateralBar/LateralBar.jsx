import React from 'react';
import ReactDOM from 'react-dom';
import Modals from 'components/Modals/Modals';

function LateralBar() {
    const openModal = () => {
        ReactDOM.render(
                    <Modals />
        ,document.getElementById('modal'));
    }
    return (
        <div class="lateralbar">
            <div class="icons">
                <div class="element">
                    <i class="fas fa-file"></i>
                </div>
            </div>
            <div class="sidenav">
                <button class='element' onclick='openmodal(event, <?= $v["web"]->snedDataModal("Video", $v["testModals"]) ?>)'>
                    <span>Anime</span>
                </button>
            </div>
        </div>
    )
}

export default LateralBar;