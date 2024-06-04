function getRandomInstagramPosts(count) {
    const posts = [
        // 'https://www.instagram.com/p/C7kXnLjRydm/embed',
        // 'https://www.instagram.com/p/C7kXhLMpogB/embed',
        // 'https://www.instagram.com/p/C7IKM1ytJxA/embed',
        // 'https://www.instagram.com/p/C58z24btffo/embed',
        // 'https://www.instagram.com/p/C5y8hCJABHa/embed',     
    ];
    const randomPosts = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * posts.length);
        randomPosts.push(posts[randomIndex]);
    }
    return randomPosts;
}

function embedRandomPosts(count) {
    const embedUrls = getRandomInstagramPosts(count);
    const feed = document.getElementById('instagram-feed');
    embedUrls.forEach(url => {
        const postDiv = document.createElement('div');
        postDiv.className = 'instagram-post';
        postDiv.innerHTML = `<iframe src="${url}"  frameborder="0" scrolling="no" allowtransparency="true"></iframe>`;
        feed.appendChild(postDiv);
    });
}

window.onload = function() {
    embedRandomPosts(6);  
};