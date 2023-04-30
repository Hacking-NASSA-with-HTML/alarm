
const root = document.getElementById('root')

function homeContent() {
    const renderHomeContent =
        `
        <p class="paragraph">Alert</p>
        `
    return renderHomeContent
}

root.insertAdjacentHTML("beforeend", homeContent())
