import html2canvas from 'html2canvas';
import { useState, useEffect } from 'react';

const Editor = () => {
    const [ codeLine, setCodeLine ] = useState("dsvsdvsd");

    const handleChange = (event) => {
        setCodeLine(event.target.value);
    }

    const onButtonClick = () => {
        html2canvas(document.querySelector("#frame")).then(canvas => {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = canvas.toDataURL()
            link.click();
        });
    };

    return (
        <div className="editor">
            <h1>Editor</h1>
            <div id="editor">
                <div className="code-lines">
                    <input className="line-input" type="text" placeholder="test" onChange={(e) => handleChange(e)}/>
                </div>
            </div>

            <div id="frame">
                <div className="line-input">{codeLine}</div>
            </div>

            <button onClick={onButtonClick}>Capture</button>
        </div>
    );
}

export default Editor;
