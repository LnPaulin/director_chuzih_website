function getRandomInstagramPosts(count) {
    const posts = [
        // 'https://www.instagram.com/p/Bw9L2rzF6iq/embed',
        // 'https://www.instagram.com/p/BvtXgE7lz4U/embed',
        // 'https://www.instagram.com/p/Bw9L2rzF6iq/embed',
        // // Add more post URLs as desired
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