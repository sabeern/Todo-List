function NewHeader(props) {
    return(
        <div>
            <h1>{props.data}</h1>
            <h2>Headers imported from components</h2>
            <p class='para1'>Paragraph imported from componets</p>
        </div>
    );
}

export default NewHeader;