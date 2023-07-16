import React from 'react';


function PanelContent(props){
    return(
        <div className='panelContainer'>
            <div className='panelHeader'>{props.data}</div>
            <div className='panelOptions'>
                <div className='panelNodeActions'>Node Actions</div>
                <div className='panelProperties'>Properties</div>
            </div>
            <div className='panelContent'>
                <div className='panelConfig'>Union configuration</div> 
                <div className='panelEdit'>Edit</div>
                <div className='panelDesc'>Not set</div>
            </div>
        </div>
    )
}

export default PanelContent;