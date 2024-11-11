// Posts de exemplo
const posts = [
    {
        title: "Título do Post 1",
        date: "11 de novembro de 2024",
        content: "Gosto de programar e aprender novas tecnologias!",
        comments: []
    },
    {
        title: "Título do Post 2",
        date: "10 de novembro de 2024",
        content: "O desenvolvimento web é uma área fascinante!",
        comments: []
    }
];

// Carregar posts na página
function loadPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Limpar posts antigos

    posts.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>Publicado em ${post.date}</em></p>
            <p>${post.content}</p>
            <a href="#" onclick="toggleComments(${index})">Leia mais...</a>
            <div class="comments" id="comments-${index}" style="display: none;">
                <h4>Comentários:</h4>
                <ul id="comment-list-${index}">
                    ${post.comments.map(comment => `<li>${comment}</li>`).join('')}
                </ul>
                <textarea id="comment-input-${index}" placeholder="Digite seu comentário..." rows="3"></textarea>
                <button onclick="addComment(${index})">Adicionar comentário</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Adicionar comentário
function addComment(postIndex) {
    const commentInput = document.getElementById(`comment-input-${postIndex}`);
    const commentText = commentInput.value.trim();

    if (commentText) {
        posts[postIndex].comments.push(commentText);
        commentInput.value = ''; // Limpar o campo de comentário
        loadPosts(); // Recarregar os posts para exibir o novo comentário
    }
}

// Alternar exibição dos comentários
function toggleComments(postIndex) {
    const commentsSection = document.getElementById(`comments-${postIndex}`);
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

// Inicializar a página
loadPosts();
