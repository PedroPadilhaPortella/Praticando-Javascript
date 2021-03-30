const postsContainer = document.querySelector('#posts-container')
const loaderContainer = document.querySelector('.loader')
const filterInput = document.querySelector('#filter')

let page = 1

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&page=${page}`)
    return response.json()
}

const generateTemplate = posts =>  posts.map(({ id, title, body}) => `
    <div class="post">
        <div class="number">${id}</div>
        <div class="post-info">
            <h2 class="post-title">${title}</h2>
            <p class="post-body">${body}</p>
        </div>
    </div>
`).join('')


const addPostsIntoDOM = async () => {
    const posts = await getPosts()
    const postsTemplate = generateTemplate(posts)

    postsContainer.innerHTML += postsTemplate
}

const getNextPosts = () => {
    setTimeout(() => {
        page++
        addPostsIntoDOM()
    }, 300)
}

const removeLoader = () => {
    setTimeout(() => {
        loaderContainer.classList.remove('show')
        getNextPosts()
    }, 1000);
}

const showLoader = () => {
    loaderContainer.classList.add('show')
    removeLoader()
}


const showPostIfMatchInputValue = inputValue => post => {
    const title = post.querySelector('.post-title').textContent.toLowerCase()
    const body = post.querySelector('.post-body').textContent.toLowerCase()
    const postContainsInputValue = title.includes(inputValue) || body.includes(inputValue)

    if(postContainsInputValue)
        post.style.display = 'flex'
    else
        post.style.display = 'none'
}

const handleInputValue = event => {
    const inputValue = event.target.value
    const posts = document.querySelectorAll('.post')

    posts.forEach(showPostIfMatchInputValue(inputValue))
}

const  handleScrollToPageBottom = () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement
    
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10
    if(isPageBottomAlmostReached)
        showLoader()
}


addPostsIntoDOM()

filterInput.addEventListener('input', handleInputValue)

window.addEventListener('scroll', handleScrollToPageBottom)