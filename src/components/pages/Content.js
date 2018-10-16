class mycomp extends comp {
    state = {
        content: []
    }
}
handle submitt = newcontent => {
    this.state ({
content: [newcontent, this.state.content]
    })
}

const onScreenContent = this.state.content.map (
    content =>
    <div>
    <li>content</li>
    </div>
)